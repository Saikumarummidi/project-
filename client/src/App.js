
// import axios from 'axios';
import React, {Component} from 'react';
import News from './components/news.js';
//import fetch from 'node-fetch';
    
class App extends Component {
    render() {
        return (
            <News news={this.state.news} />
        )
    }
    
    state = {
        news: []
    };
 
    componentDidMount() {
        fetch("http://localhost:4060/posts", {
            mode: 'no-cors',
            method: "get",
            headers: {
                 "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({ news: res.data })
            })
            .catch(console.log)
    }
}
 
export default App;