import css from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
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
        </p>{" "}
      </div>
    </div>
  );
};

export default Statistics;
