import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <div className={css.rating}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div className={css.rating}>
        <p>Total: {total}</p>
        <p className={css.positiveFeedback}>
          Positive Feedback Percentage: {positivePercentage}%
        </p>{' '}
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
