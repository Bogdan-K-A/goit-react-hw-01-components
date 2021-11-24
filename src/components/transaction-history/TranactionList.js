import PropTypes from 'prop-types'
import Transaction from './Tranactions'
import './Tranactions.modules.css'

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
        {items.map((el) => (
          <tr key={el.id}>
            <Transaction
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
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
