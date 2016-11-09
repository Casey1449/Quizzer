import React from "react";

export default (props) => {
  return (
      <div className="single-answer-choice">
        <label className="question-text">
          <input className="radio-buttons" type="radio" name={ props.name } />
          { props.text }
        </label><br/>
      </div>
  );
};
