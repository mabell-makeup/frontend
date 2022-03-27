import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/atoms/Button/Button';

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import styled from '@emotion/styled'

const MyDiv = styled.div`
  margin-top: 50px;
  padding: 0 0 20px 30px;
`;

const MyCss = css({
    color: 'red',
});

function App() {
  return (
    <div className="App">
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
        <div css={MyCss}>
          <p> is emotion css activated...?</p>
        </div>
      </header>
    </div>
  );
}

export default App;
