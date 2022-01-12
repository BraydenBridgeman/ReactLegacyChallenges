import React, { Component } from 'react';

 
export default class CatList extends Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
  }

  render() {
    return (
      <div>
        {this.props.cats.map( (cats) => <li>{cats}</li> )}
      </div>
    );
  }
}