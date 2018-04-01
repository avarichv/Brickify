import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comp from './derivatives/contentList';
import Layout from './components/layout';
import ContentManger from './derivatives-II/contentManager';
//import Comp from './components/pagingView';

import { data, /* config */ } from './demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContentManger data={data} config={{bufferSize: 20}} />
        {/* <Layout data={data} config={{Shader: [() => null, () => null,() => null,() => null], slicing: '2,2'}} /> */}
        {/* <Comp data={data} config={{bufferSize: 20}} /> */}
      </div>
    );
  }
}

export default App;
