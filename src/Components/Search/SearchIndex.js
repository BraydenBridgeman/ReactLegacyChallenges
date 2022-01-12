import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor() {
    super();
    this.state = {
      userSearchTerm: '',
      res: [],
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
    this.inputFromUser = this.inputFromUser.bind(this);
  }

  // mount component for displaying results

  componentDidMount() {
    this.setState({ res: this.state.things })
  }

  // function that will allow user to display things if typed, will display 'error message' if any of the 'things' aren't typed, or will display all if nothing is typed at all.

  searchFunction = () => {
    if (this.state.things.includes(this.state.userSearchTerm))
      this.setState({ res: [this.state.userSearchTerm ]})
    else if (this.state.userSearchTerm !== '')
      this.setState({ res: ['Error Message: That is not a thing!']})
    else
      this.setState({ res: this.state.things })
  }

  inputFromUser(event) {
    this.setState({ userSearchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <Input placeholder="Search for things here" value={this.state.userSearchTerm} onChange={this.inputFromUser} />

        <hr />

        <Button onClick={this.searchFunction}>Search those Things!</Button>

        <h3>Results:</h3>
        <ul>{this.state.res.map(thing => <li>{thing}</li>)}</ul>
      </div>
    )
  }
}