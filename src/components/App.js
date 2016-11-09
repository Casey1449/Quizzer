import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import QuestionBox from './QuestionBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  fetchQuizzes() {
    return axios.get('/quizzes')
      .then(response =>
        this.setState({ quizzes: response.data.quizzes })
      )
      .catch(error =>
        console.log(error)
      );
  }

  componentDidMount() {
    this.fetchQuizzes();
  }

  render() {
    return (
      this.state.quizzes ?
        <div className="App">
          <h1 className="app-title">{ this.state.quizzes[0].title }</h1>
          <section className="questions-wrapper">
            { this.state.quizzes[0].questions.map( q =>
                <QuestionBox
                  key={ Math.random() }
                  question={ q.title }
                  answers={ q.answers }
                  name={ q.id }
                /> )}
          </section>
        </div>
      :
        <h1>Loading quizzes...</h1>
    );
  }
}

export default App;
