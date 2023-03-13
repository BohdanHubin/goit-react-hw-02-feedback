import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions  ({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={style.btn_container}>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className={style.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
