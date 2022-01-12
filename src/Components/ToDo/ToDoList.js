import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

export default class ToDoList extends Component {
    constructor() {
        super()
        this.state = {
            toDoList: [],
            addToList: ''
        }
    }

    // function to add list items
    addItems(first, newListItems) {
        this.setState({ toDoList: [...first, {toDoList: newListItems, completedItem: "Incomplete!"}]})
    }

    // completed items function
    listItemComplete(index) {
        let updateItem = this.state.toDoList;
        updateItem[index].completedItem = "Complete!"
        this.setState({ toDoList: updateItem });
    }

    render() {
        return (
            <div>
                <Input 
                onChange={(event) => this.setState({addToList: event.target.value})}
                placeholder="Add Items Here"
                />

                <hr />

                <Button onClick={() => this.addItems (this.state.toDoList, this.state.addToList)}>Add Items</Button>

                <hr />

                <h1>To Do List</h1>

                <ul>
                    {this.state.toDoList}
                </ul>

            </div>
        )
    }
}