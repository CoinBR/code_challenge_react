import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser' 


const networkErrorProbability = 50 / 100;
const isNetworkDown = () =>  networkErrorProbability < Math.random() 
const networkErrorResponse = new HttpResponse(null, { status: 500 })

const db: DB = {
  transactions: [
      { id: 1, description: 'Groceries' },
      { id: 2, description: 'Gas' },
      { id: 3, description: 'Restaurant' },
    ],
    _idCounter:  3,
}

const handlers = [
  http.get('/api/v1/transactions', () => {
    if (isNetworkDown()) return networkErrorResponse

    return HttpResponse.json<Transaction[]>(
        db.transactions
    )
  }),

  http.post('/api/v1/transactions', async ({ request }) => {
    if (isNetworkDown()) return networkErrorResponse

    const newTransaction = await request.json() as CreateTransactionDTO

    const transaction: Transaction = {
      id: ++db._idCounter,
      ...newTransaction
    }

    db.transactions.push(transaction)

    return HttpResponse.json<Transaction>(
      transaction, { status: 201 }
    )
  }),
]


const worker = setupWorker(...handlers)

export const bootMockApi = async () => {
  try {
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js', 
      },
    })
    console.log('Mock Service Worker started successfully')
  } catch (error) {
    console.error('Failed to start Mock Service Worker:', error)
  }
}


