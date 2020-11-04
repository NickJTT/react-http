import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], errorMessage: null };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.setState({ posts: response.data });
        }).catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data!' });
        });
    }

    render() {
        const { posts, errorMessage } = this.state;
        return <React.Fragment>
            <h3>List Of Posts:</h3>
            { posts.length ? posts.map(post => <React.Fragment key = { post.id }><p>{ post.title }</p></React.Fragment>) : null }
            { errorMessage ? <p>{ errorMessage }</p> : null }
        </React.Fragment>;
    }
}

export default PostList;