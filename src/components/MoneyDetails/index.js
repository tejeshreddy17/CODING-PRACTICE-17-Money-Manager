// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const incomedetails = details.filter(
    eachdetail => eachdetail.type === 'INCOME',
  )
  const expensesDetails = details.filter(
    eachdetail => eachdetail.type === 'EXPENSES',
  )

  const income =
    incomedetails.length !== 0
      ? incomedetails.reduce(
          (previousValue, currentValue) =>
            parseInt(previousValue) + parseInt(currentValue.amount),
          0,
        )
      : 0
  const expenses =
    expensesDetails.length !== 0
      ? expensesDetails.reduce(
          (previousValue, currentValue) =>
            parseInt(previousValue) + parseInt(currentValue.amount),
          0,
        )
      : 0

  return (
    <div className="money-details-card">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo-style"
        />
        <div className="balance-style">
          <p className="description-style">Your Balance</p>
          <p testid="balanceAmount" className="amount-style">
            Rs. {income - expenses}
          </p>
        </div>
      </div>
      <div className="balance-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="logo-style"
        />
        <div className="balance-style">
          <p className="description-style">Your Income</p>
          <p testid="incomeAmount" className="amount-style">
            Rs. {income}
          </p>
        </div>
      </div>
      <div className="balance-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo-style"
        />
        <div className="balance-style ">
          <p className="description-style">Your Expenses</p>
          <p testid="expensesAmount" className="amount-style">
            Rs. {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
