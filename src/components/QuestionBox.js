import React from "react";
import AnswerChoice from "./AnswerChoice";

export default (props) => {
  return (
    <section className="question-box">
      <div className="question-title">
        <h3>{ props.question }</h3>
      </div>
      <div className="question-answer-choices">
        { props.answers.map( a =>
          <AnswerChoice
            key={ Math.random() }
            name={ props.name }
            text={ a.title }
          /> )}
      </div>
    </section>
  );
};
