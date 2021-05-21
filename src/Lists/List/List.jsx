import React from 'react';

class List extends React.Component {
  render() {
    return (
      <div className='list'>
        <div className='title'>{this.props.title}</div>
        <div className="leftSide">
          {this.props.obj[this.props.title]
            .map(o => Object.keys(o))
            .map(el => <div className='side'>{el}</div>)}
        </div>
        <div className="rightSide">
          {this.props.obj[this.props.title]
            .map(o => Object.values(o))
            .map(el => <div className='side'>{el}</div>)}
        </div>
      </div>
    )
  }
}

export default List;
