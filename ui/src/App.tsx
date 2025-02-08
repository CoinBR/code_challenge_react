import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('/api/v1/transactions');
      const data = await response.json();
      setTransactions(data);
      setError(null);
    } catch (e) {
      setError(`error :~`);
    }
  };

  const addTransaction = async () => {
    try {
      const response = await fetch('/api/v1/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: 'New Transaction' }),
      });

      const newTransaction = await response.json();
      setTransactions([...transactions, newTransaction]);
      setError(null)
    } catch (e) {
      setError("error =(")
    }
  };

  return (
    <div className="App">
      <Container className="mt-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <h1>Transactions</h1>
        <Button onClick={addTransaction} className="mb-3">Add Transaction</Button>
        <Row>
          {transactions.map(transaction => (
            <Col key={transaction.id} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Transaction {transaction.id}</Card.Title>
                  <Card.Text>{transaction.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

