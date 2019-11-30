import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
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
            <AppLink href="https://github.com/strange-loops/strange-loops" target="_blank" rel="noopener noreferrer">
                See the README
            </AppLink>
        </div>
    );
}

function Dashboard(): JSX.Element {
    return (
        <div>
            <h2>Dashboard</h2>
            <div>This dashboard sucks, sorry!</div>
        </div>
    );
}

const routePrefix = '/strange-loops';

const routes = [
    {
        path: `/`,
        exact: true,
        main: (): JSX.Element => <Home />,
        displayName: 'Home',
    },
    {
        path: `/about`,
        main: (): JSX.Element => <About />,
        displayName: 'About',
    },
    {
        path: `/dashboard`,
        main: (): JSX.Element => <Dashboard />,
        displayName: 'Dashboard',
    },
];

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
                        <Redirect exact from="/" to={routePrefix} />
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route key={index} path={`${routePrefix}${route.path}`} exact={route.exact}>
                                <route.main />
                            </Route>
                        ))}
                    </Switch>
                    <RoutingNote>Some routing junk below</RoutingNote>
                    <ul>
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <li key={index}>
                                <StyledLink to={`${routePrefix}${route.path}`}>{route.displayName}</StyledLink>
                            </li>
                        ))}
                    </ul>
                </Header>
            </CenteredText>
        </Router>
    );
}

export default App;
