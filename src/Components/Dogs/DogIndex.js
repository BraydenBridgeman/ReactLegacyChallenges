import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor() {
        super();
        this.state = { url: "https://dog.ceo/img/dog-api-logo.svg" }
    }

    randomDog = async () => {
        let dogUrl;
        await fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(res => dogUrl = res.message)
            .catch(err => console.log(err))
        this.setState({ url: dogUrl })
    }

    render() {
        return (
            <div>
                <button onClick={this.randomDog}>Click here for a Random Dog Picture!</button>
                <hr />
                <img width="300px" src={this.state.url} alt="random dog" />
            </div>
        )
    }
}