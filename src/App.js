import React from 'react';
import './App.css';
import Header from './Header'
import Books from './Books'

class App extends React.Component {
  render() {
    return (
      <div className='title'>
        <Header />
        <Books />
      </div>

    )
  }
}

export default App;
