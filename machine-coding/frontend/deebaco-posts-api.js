
import React from 'react';
import axios from 'axios';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handleParentClick = this.handleParentClick.bind(this);
  }

  handleParentClick(){
    console.log("parent");
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(result => {
      // console.log(result.data);
      this.setState({ data: result.data });
    });
  }

  render() {
    return (
      <Posts data={this.state.data} handleParentClick={this.handleParentClick}/>
    )
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log(e.target.attributes);
    
  }


  render() {
    return this.props.data.map(element => {
      return <li name={element.id} key={element.id} onClick={(e) => {this.handleClick(e)}}>{element.body}</li>
    });
  }
}


