import React, { Component } from 'react';

class App extends Component {

  id = 1;

  state = {
    password:'',
    username:'',
    list:[],
    btnAtive:false
  }

  handleChange = (e)=>{
    const {name, value} = e.target;
    
    this.setState({
      [name]:value
    });

    this.isSafe(name,value);

  }

  isSafe = (name, value)=>{
    if(name==='password'){
      const pattern1 = /[a-z]/;
      const pattern2 = /[A-Z]/;
      if( value.length > 5 &&  value.indexOf(this.state.username) === -1 && pattern1.test(value) && pattern2.test(value) ){
        this.setState({btnAtive:true});
      }else{
        this.setState({btnAtive: false});
      }
    }
  }

  handleInsert = ()=>{
    const {list, username, password} = this.state;
    if(password.length > 6){
    this.setState({
      list: list.concat({
        username: username,
        password: password,
        id: this.id
      }),
      username:'',
      password:''
    })
    this.id += 1;
    this.setState({btnAtive: false});
    }
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <input type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
        <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
        {
          this.state.btnAtive
          ?<button onClick={this.handleInsert}>추가하기</button>
          :<button onClick={this.handleInsert} disabled>추가하기</button>
        }
        <ul>
          {list.map((item)=>{
            return(
            <li key={item.id}>
              {item.username} 의 비밀번호는 {item.password} 입니다.
            </li>
            )           
          })}
        </ul>
      </div>
    );
  }
}

export default App;