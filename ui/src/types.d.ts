interface CreateTransactionDTO {
  description: string
}

interface Transaction extends CreateTransactionDTO {
  id: number
}

interface DB {
  transactions: Transaction[];
  _idCounter: number;
}


