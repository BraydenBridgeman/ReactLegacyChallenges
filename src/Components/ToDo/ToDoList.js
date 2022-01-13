import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            userList: []
        }
    }

    changeUserInput = (e) => {
        this.setState({ userInput: e.target.value })
    }

    updateList = () => {
        let itemList = this.state.userList;
        itemList.push([ this.state.userInput, false ]);
        this.setState({ userList: itemList });
    }

    completedTask = (index) => {
        let itemList = this.state.userList;
        itemList[index][1] = !itemList[index][1];
        this.setState({ list: itemList });
    }

    render() {
        return (
            <div>
                <Input placeholder="Add items to your list" onChange={ this.changeUserInput }></Input>
                <hr />
                <Button color="primary" onClick={ this.updateList }>Update List</Button>
                <hr />
                <div>
                <h2>
                    Use the checkbox to complete the task!
                </h2>
                <br />
                    {this.state.userList.map((item, index) =>
                        <ul key={index}>
                            <Input type="checkbox" onChange={() => this.completedTask(index)}></Input>
                        <span style={{ display: "inline-block" }}>{!item[1] ? item[0] : <h6>{item}</h6>}</span>
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}