import React, {Component} from 'react';
import PostList from './components/postList/PostList'
import CreatePost from './components/createPost/CreatePost';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            postList : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                this.setState({
                    postList:posts
                })
            })
    }

    getNextId = () => {
        return this.state.postList.reduce((max, post) => {
            if(post.id > max){
                max = post.id
            }
            return max;
        },0) +1
    };

    onVote = (id) => {
        let ps = this.state.postList.map(post => {
            if(post.id === id){
                post.userId +=1;
            }
            return post
        })

        this.setState({
            postList:ps
        })
    };

    onPostSubmit =(post) => {
        post.id = this.getNextId();
        this.setState({
            postList:[post, ...this.state.postList]
        })
    };

    render() {
        console.log(this.state.postList)
        return (
            <div className="App">
                <CreatePost onPostSubmit={this.onPostSubmit} />
                <PostList list={this.state.postList} onVote={this.onVote} />
            </div>
        );
    }
}

export default App;
