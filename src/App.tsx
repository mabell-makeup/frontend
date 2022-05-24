import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/atoms/Button/Button';
import User from './components/atoms/User/User'
import { QueryClient, QueryClientProvider } from 'react-query';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import styled from '@emotion/styled'

const MyDiv = styled.div`
  margin-top: 50px;
  padding: 0 0 20px 30px;
`;

const myCss = css({
  color: 'red',
});

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button label="これはボタンです" />
          <MyDiv>
            <p>
              emotion styled activated.
            </p>
          </MyDiv>
          <div css={myCss}>
            <p>emotion css activated.</p>
          </div>
          <User></User>
        </header>
      </QueryClientProvider>
    </div>
  );
}

export default App;


