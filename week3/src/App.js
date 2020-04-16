import React, { Component } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

class App extends Component {
  state = {
    data: null,
    birthday:''
  };

  cache = setupCache({
    maxAge: 15 * 60 * 1000
  });

  api = axios.create({
    adapter: this.cache.adapter
  });
  
  handleClick = (type) => {

    if(type==='lotto'){
      axios.get('http://askat.me:8000/api/lotto')
      .then(response => {
        this.setState({
          data: response.data.join(' ')
        })
      })
    }
    
    if(type==='fortune'){
      axios.get('http://askat.me:8000/api/fortune/'+ this.state.birthday)
      .then(response => {
        this.setState({
          data: response.data
        })
      }).catch(error=>{
        alert('날짜를 모두 입력해주세요');
      });
    }

    if(type==='bad'){
      axios.get('http://askat.me:8000/api/bad/')
      .then(response => {
        this.setState({
          data: response.data
        })
      }).catch(error=>{
        alert('oops');
      });
    }

    if(type==='slow'){
      this.api({
        url: 'http://askat.me:8000/api/slow',
        method: 'get'
      }).then((response) => {
        this.setState({
          data: response.data
        })
      })

    }
    
  };

  handleChange = (e) => {
    this.setState({
      birthday:e.target.value
    })
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.handleClick('lotto')}>Lotto</button>
        <input type="date" placeholder="yyyy-mm-dd" onChange={this.handleChange} value={this.state.birthday}/>
        <button onClick={()=>this.handleClick('fortune')}>Fortune</button>
        <button onClick={()=>this.handleClick('bad')}>Bad</button>
        <button onClick={()=>this.handleClick('slow')}>Slow</button>

        <p>{this.state.data}</p>
      </div>
    )
  }
}

export default App
