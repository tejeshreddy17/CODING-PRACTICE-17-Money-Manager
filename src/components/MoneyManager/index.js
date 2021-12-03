import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    details: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onsubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (title !== '' && amount !== '' && Number.isInteger(parseInt(amount))) {
      this.setState(prevState => ({
        details: [...prevState.details, {id: uuidv4(), title, amount, type}],
        title: '',
        amount: '',
        type: 'INCOME',
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectType = event => {
    this.setState({type: event.target.value})
    console.log(event.target.value)
  }

  deleteTransaction = id => {
    const {details} = this.state
    const filteredDetails = details.filter(eachdetail => eachdetail.id !== id)
    this.setState({details: filteredDetails})
  }

  render() {
    const {details, title, amount, type} = this.state
    return (
      <div className="mmg-background-card">
        <div className="name-display-card">
          <h1 className="name-style">Hi, Richard</h1>
          <p className="welcome-style">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails details={details} />
        <div className="bottom-transaction-details-and-input-card">
          <form className="form-card-style">
            <h1 className="add-transaction-heading-style">Add Transaction</h1>
            <label htmlFor="title-input" className="form-sub-heading-style">
              TITLE
            </label>
            <input
              id="title-input"
              className="input-style"
              onChange={this.onChangeTitle}
              type="text"
              placeholder="TITLE"
              value={title}
            />
            <label htmlFor="amount-input" className="form-sub-heading-style">
              AMOUNT
            </label>
            <input
              id="amount-input"
              onChange={this.onChangeAmount}
              type="text"
              placeholder="AMOUNT"
              value={amount}
              className="input-style"
            />
            <label htmlFor="select" className="form-sub-heading-style">
              TYPE
            </label>
            <select
              onChange={this.onSelectType}
              value={type}
              className="input-style"
            >
              <option value={transactionTypeOptions[0].optionId}>Income</option>
              <option value={transactionTypeOptions[1].optionId}>
                Expenses
              </option>
            </select>
            <button
              className="button-style"
              type="button"
              onClick={this.onsubmit}
            >
              Add
            </button>
          </form>
          <div className="transaction-details-card">
            <h1 className="add-transaction-heading-style">History</h1>
            <div className="transaction-details-header-card">
              <p className="transaction-details-header-title-style">Title</p>
              <p className="transaction-details-header-amount-style">Amount</p>
              <p className="transaction-details-header-type-style">Type</p>
            </div>
            <ul>
              {details.map(eachdetail => (
                <TransactionItem
                  deleteTransaction={this.deleteTransaction}
                  eachTransaction={eachdetail}
                  key={eachdetail.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
