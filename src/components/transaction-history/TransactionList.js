import PropTypes from 'prop-types'
import './Transactions.modules.css'

function TranactionList({ items }) {
  return (
    <table className="transactionHistory">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TranactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default TranactionList
