
//'https://retogram-server-r3y70flk5-lilfon.vercel.app/graphql' 

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

{/*...*/}
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

{/*...*/}

const client = new ApolloClient({
        uri: 'https://retogram-server-lilfon.vercel.app/graphql' 
})

ReactDOM.render(
        <ApolloProvider client={client}>
                <App />
        </ApolloProvider>,
        document.getElementById('app')
)