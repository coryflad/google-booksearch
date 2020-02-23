import React from 'react';
import './App.css';
import Search from './Search/Search'

class App extends React.Component {
  render() {
    return (
      <div className='title'>
        <h1>Google Book Search</h1>
        <Search />
      </div>

    )
  }
}

export default App;
