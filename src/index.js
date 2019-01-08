import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        welcome new world ！
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));