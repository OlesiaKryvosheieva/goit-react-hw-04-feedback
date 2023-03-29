import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Notification';
import { Section } from './Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const options = Object.keys(state);

  function countTotalFeedback() {
    const values = Object.values(state);
    return values.reduce((acc, value) => acc + value, 0);
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good * 100) / countTotalFeedback());
  }

  function handleUpdate(state) {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleUpdate}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
}
