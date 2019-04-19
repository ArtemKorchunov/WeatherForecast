import React, { Component } from "react";
import styled from "styled-components";

import { Weather } from './components';

class App extends Component {
  render() {
    return <Weather/>;
  }
}

export default App;

App.Container = styled.div``;
