import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState([])
  const addExpense = () => {
    if (!input || !amount) {
      return;
    } else {
      const newExpense = {
        id: expense.length + 1,
        title: input,
        amount: amount
      };
      setExpense([...expense, newExpense])
      setInput('')
      setAmount('')
    }

  }

  const deleteExpense = (id) => {
    setExpense(expense.filter((expenses) => expenses.id != id))
  }
  return (

    <div className="p-4">
      <h2 className="">Expense Tracker</h2>
      <input
        type='text'
        placeholder='Add your expense'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add Expense</button>

      <ul className='expense-list'>
        {
          expense.map((expense) => (
            <li className='' key={expense.id}>
              <span className="">{expense.title}</span>
              <span>{expense.amount}</span>

              <button className='' onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>

          ))
        }
      </ul>
    </div>

  );
}

export default App;
