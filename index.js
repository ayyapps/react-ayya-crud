import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      record:[]
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.get}>get</button>
        <button onClick={this.post}>post</button>
        {this.state.record.map((x,index) => <div>{ index ===0 ? x.title : ''}</div>)}
      </div>
    );
  }

  get = () =>
  {
    axios.get('/posts').then(result => 
    {
      console.log(result);
      this.setState({record:result.data})
    })
  }
}

render(<App />, document.getElementById('root'));
