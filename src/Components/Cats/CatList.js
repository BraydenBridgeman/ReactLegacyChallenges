import React, { Component } from 'react';
import CatIndex from './CatIndex';
 
export default class CatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds : props.CatIndex.cats
    }
  }

  CatList = () => {
    return (
        <div>
          {CatIndex = props.breeds.Map( cats => <li>cat</li> )}
        </div>
      );
    }
  }