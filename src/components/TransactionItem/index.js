// Write your code here

import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {title, amount, type, id} = eachTransaction

  const onclikcingDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-card">
      <p className="transaction-item-title-style">{title}</p>
      <p className="transaction-item-amount-style">Rs.{amount}</p>

      <p className="transaction-item-type-style">{type}</p>
      <img
        className="icon-style"
        onClick={onclikcingDelete}
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        testId="delete"
      />
    </li>
  )
}

export default TransactionItem
