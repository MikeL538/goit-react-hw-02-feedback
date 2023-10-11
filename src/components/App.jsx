import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import css from './style.module.css';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return storedFeedback;
  });

  const handleFeedback = option => {
    setFeedback(prevFeedback => {
      const updatedFeedback = {
        ...prevFeedback,
        [option]: prevFeedback[option] + 1,
      };
      localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;

  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          'No feedback given'
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
