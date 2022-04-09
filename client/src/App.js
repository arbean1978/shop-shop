import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { ApolloProvider } from '@apollo/react-hooks';
//import ApolloClient from 'apollo-boost';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Success from "./pages/Success";
// redux hook and store
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderHistory from "./pages/OrderHistory";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
 //useQuery,
 // gql
} from "@apollo/client";
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import { HttpLink } from 'apollo-link-http';
//import { onError } from 'apollo-link-error';
//import { ApolloLink } from 'apollo-link';

//const client = new ApolloClient({
//  link: ApolloLink.from([
//    onError(({ graphQLErrors, networkError }) => {
//      if (graphQLErrors)
//        graphQLErrors.forEach(({ message, locations, path }) =>
//          console.log(
//            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//          ),
//        );
//      if (networkError) console.log(`[Network error]: ${networkError}`);
//    }),
//    new HttpLink({
//      uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
//      credentials: 'same-origin'
//    })
//  ]),
//  cache: new InMemoryCache()
//});

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
