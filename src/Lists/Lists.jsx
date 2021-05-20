import React from 'react';
import List from './List/List';
import { timeWork } from './timeWork';

class Lists extends React.Component {
  state = {
    data: null,
    form: false
  }

  componentDidMount() {
    let [data, form, saveNewData] = timeWork();
    this.setState({ data, form });
  }

  render() {
    return (
      <div>
        Lists
         
        {this.state.data && this.state.data.map(obj => {
          return <List title={Object.keys(obj)[0]} obj={obj} />
        })}
        
        {this.state.form && <div className="form">
          <div className="common">
            Common : <input type="text" />
          </div>
          <div className="theory">
            Theory : <input type="text" />
          </div>
          <div className="practice">
            Practice : <input type="text" />
          </div>
        </div>}
      </div>
    )
  }
}

export default Lists;
