import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Table from './components/Table/Table';



class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        list: []
    };
  }

  render_submit = (host) => {
    fetch("http://api.ipstack.com/"+host+"?access_key=f997d1f397e99352a6f1dc7bce252e47&hostname=1", { method: 'get' })
    .then(response => response.json()
    .then(data => this.setState({list: [data]})));

  }

  reset_submit = () => {

    this.setState({list:[]});

  }

  render() {
    return (

      <div className="App">
        <Header/>
        <main>
          <section className="wrapper">
            <Input submit = {this.render_submit} reset = {this.reset_submit} />
            <Table list = {this.state.list} /> 
          </section>
        </main>
      </div>

    );
  }
}

export default App;
