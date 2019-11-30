import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import penrose from './penrose.svg';

/* 
I still need to figure out how to use it TypeScript!
The styled.d.ts and myTheme.ts files are mostly mysteries to me.
The react-app-env.d.ts file is probably garbage, but not sure if we can delete.
* https://www.styled-components.com/docs/api#typescript
* https://reactjs.org/docs/static-type-checking.html#typescript
* https://www.typescriptlang.org/docs/handbook/jsx.html
* https://webpack.js.org/guides/typescript/#importing-other-assets
*/

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

const RoutingNote = styled.div`
    padding-top: 10vmin;
`;

const StyledLink = styled(Link)`
    color: #09d3ac;
`;

// You can think of these components as "pages"
// in your app.

function Home(): JSX.Element {
    return (
        <div>
            <AppLogo src={penrose} alt="penrose triangle" />
            <p>This is the starting place for the Strange Loops project!</p>
            <AppLink href="https://github.com/strange-loops/strange-loops" target="_blank" rel="noopener noreferrer">
                See the README
            </AppLink>
        </div>
    );
}

function About(): JSX.Element {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard(): JSX.Element {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function App(): JSX.Element {
    return (
        <Router>
            <CenteredText>
                <Header>
                    {/*
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path
                    matches the current URL. Use a <Switch> any time
                    you have multiple routes, but you want only one
                    of them to render at a time
                    */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                    <RoutingNote>Some routing junk below</RoutingNote>
                    <ul>
                        <li>
                            <StyledLink to="/">Home</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/about">About</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/dashboard">Dashboard</StyledLink>
                        </li>
                    </ul>
                </Header>
            </CenteredText>
        </Router>
    );
}

export default App;
