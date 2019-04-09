import React, { Component } from 'react';
import './App.css';



function Header(props){
  return (
    <div className="jumbotron text-center">
      <h1>Make a Checkerboard!</h1>
      <input placeholder="Enter Row Count!" />
      <div className="text-center d-block mt-3"><button className="btn btn-warning">Create Checkerboard!</button></div>
    </div>
  );
}

class Square extends Component {
  
  render() {
    let styles = {width: "50px", height: "50px", display: "inline-block", background: this.props.mystyle}
    return (
      <div className="d-inline-block" style={styles}></div>
    )
  }
}

class Row extends Component {
  
  getSquares = (n, even) => {
    let count = n;
    let arr = [];
    let red = even;
    while(count >= 0){
      if(red){
        arr.push(
          <Square key={count} mystyle={"red"} />
          );
      } else {
        arr.push(
          <Square key={count} mystyle={"black"} />
        );
      }
      count--;
      red = !red;
    }
    return arr;
  }

  render() {
    return (
      <div style={{height: "50px"}}>
        {this.getSquares(this.props.cols, this.props.even)}
      </div>
    );
  }

}

class Checkerboard extends Component {

  constructor(props){
    super(props);
    console.log(this.props.n);
  }
  makeRows = (n) => {
    let even = false;
    let arr = [];
    for (let i=0; i<=n; i++){
      arr.push(
        <Row key={i} cols={n} even={even} />
      )
      even = !even;
    }
    return arr;
  }

  render() {
    return (
      <div className="mx-auto">
        {this.makeRows(this.props.n)}
      </div>
    )
  }
}



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      size: 8
    }
  }
  updateSize = (e) => {
    console.log(e.target.value)
    this.setState({size: e.target.value});
  } 
  render() {
    return (
      <div className="mx-auto">
        <Header />
        <input onChange={this.updateSize} type="range" min="0" max="20" value={this.state.size} />  {/* get the value from input, pass into checkerboard as a prop  */}
        <Checkerboard  n={this.state.size} />
      </div>
    );
  }
}

export default App;
