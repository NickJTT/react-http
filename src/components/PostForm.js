import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { userId: '', title: '', body: '' };
    }

    userInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    userSubmit = event => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const { userId, title, body } = this.state;
        return <form onSubmit = { this.userSubmit }>
            <div>
                <label>User ID</label>
                <input type = 'text' name = 'userId' value = { userId } onChange = { this.userInput }/>
            </div>
            <div>
                <label>Title</label>
                <input type = 'text' name = 'title' value = { title } onChange = { this.userInput }/>
            </div>
            <div>
                <label>Body</label>
                <input type = 'text' name = 'body' value = { body } onChange = { this.userInput }/>
            </div>
            <button type = "submit">Submit</button>
        </form>;
    }
}

export default PostForm;