import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button
      type="button"
      name={option}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

//   onLeaveFeedback = (option)=> {
// [option]: state[option] + 1;
//   };

// () => onLeaveFeedback(label);
// example {good: good + 1}
// {[option]: state[option] + 1}

// key='' для button ???
