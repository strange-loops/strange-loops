import * as React from 'react';
import styled from 'styled-components';
import penrose from './penrose.svg';

const CenteredText = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
`;

const AppLink = styled.a`
  color: #09d3ac;
`;

function App() {
  return (
    <CenteredText>
      <Header>
        <AppLogo src={penrose} alt="penrose triangle" />
        <p>
          This is the starting place for the Strange Loops project!
        </p>
        <AppLink
          href="https://github.com/strange-loops/strange-loops"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the README
        </AppLink>
      </Header>
    </CenteredText>
  );
}

export default App;
