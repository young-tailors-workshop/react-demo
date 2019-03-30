import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './client'
import './App.css'
import StopWatch from './components/Stopwatch'
import Feed from './Feed'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <StopWatch />
        <Feed />
      </ApolloProvider>
    )
  }
}

export default App
