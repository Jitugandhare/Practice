const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory expense storage
let expenses = [];
let currentId = 1;

// Get all expenses
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

// Get expense by id
app.get('/expenses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(exp => exp.id === id);
  if (!expense) {
    return res.status(404).json({ message: 'Expense not found' });
  }
  res.json(expense);
});

// Create a new expense
app.post('/expenses', (req, res) => {
  const { description, amount, date } = req.body;
  if (!description || !amount || !date) {
    return res.status(400).json({ message: 'Please provide description, amount, and date' });
  }
  const expense = { 
    id: currentId++, 
    description, 
    amount, 
    date 
  };
  expenses.push(expense);
  res.status(201).json(expense);
});

// Update an expense
app.put('/expenses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const expenseIndex = expenses.findIndex(exp => exp.id === id);
  if (expenseIndex === -1) {
    return res.status(404).json({ message: 'Expense not found' });
  }
  const { description, amount, date } = req.body;
  if (!description || !amount || !date) {
    return res.status(400).json({ message: 'Please provide description, amount, and date' });
  }
  expenses[expenseIndex] = { id, description, amount, date };
  res.json(expenses[expenseIndex]);
});

// Delete an expense
app.delete('/expenses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const expenseIndex = expenses.findIndex(exp => exp.id === id);
  if (expenseIndex === -1) {
    return res.status(404).json({ message: 'Expense not found' });
  }
  expenses.splice(expenseIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Expense tracker backend running on http://localhost:${port}`);
});
