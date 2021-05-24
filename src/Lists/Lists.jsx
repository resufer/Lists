import React from 'react';
import List from './List/List';
import { initialize, timeWork } from './timeWork';

class Lists extends React.Component {
  state = {
    data: null,
    saveNewData: null,
    form: false,
    isReady : false
  }

  componentDidMount() {
    initialize();
    let [data, form, saveNewData] = timeWork();
    this.setState({ data, form, saveNewData });
  }

  collectData() {
    let data1 = document.getElementById('commonHour').value + ':' + document.getElementById('commonMin').value;
    let data2 = document.getElementById('theoryHour').value + ':' + document.getElementById('theoryMin').value;
    let data3 = document.getElementById('practiceHour').value + ':' + document.getElementById('practiceMin').value;
    if (data1.length > 2 && data2.length > 2 && data3.length > 2) {
      this.setState({ 'isReady': true });
      this.state.saveNewData(this.state.data, data1, data2, data3);
      this.setState({ form: false });
    }
  }

  render() {
    return (
      <div>
        Lists
         
        {this.state.data && this.state.data.map(obj => {
          return <List title={Object.keys(obj)[0]} obj={obj} />
        })}
        
        {this.state.form && <div className="form" onClick={() => this.collectData()}>
          <div className="common">
            Common -
            <input type="number" id='commonHour'/>:
            <input type="number" id='commonMin' />
          </div>
          <div className="theory">
            Theory JS -
            <input type="number" id='theoryHour'/>:
            <input type="number" id='theoryMin' />
          </div>
          <div className="practice">
            Front Practice -
            <input type="number" id='practiceHour'/>:
            <input type="number" id='practiceMin' />
          </div>
        </div>}
      </div>
    )
  }
}

export default Lists;
