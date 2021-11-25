import PropTypes from 'prop-types'
import s from './Statistics.module.css'

function Statistics({ title, stats }) {
  return (
    <>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default Statistics
