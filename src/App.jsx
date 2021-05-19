import React from 'react';
import Header from './Header/Header';
import Lists from './Lists/Lists';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Lists />
      </div>
    )
  }
}

export default App;
