import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testeapi")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="AppBiblio">
        <header className='App-header'>
          <img src={logo} className='App-logo' alt="logo" />
          <h1 className='App-title'>Sistema Biblioteca</h1>
        </header>
        <p className='App-intro'>{this.state.apiResponse}</p>
        <p> Testando Api Biblioteca</p>
      </div>

    );
  }
}
 
export default App;