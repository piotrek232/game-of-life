import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';

import Dashboard from './Dashboard';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => (theme.darks.primary || '#040911')};
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Route location={location} exact path="/" component={Dashboard}/>
      </Wrapper>
    );
  }
}

export default App;
