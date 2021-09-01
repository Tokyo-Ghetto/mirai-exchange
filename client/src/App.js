import logo from './logo.svg';
import './App.css';
import React from 'react'
import TestStockCard from './components/testStockCard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }


  callAPI() {
    fetch("http://localhost:9000/testFinnhub/CLOV")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <TestStockCard/>
      </div>
    );
  }
}

export default App;
