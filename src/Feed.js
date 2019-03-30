import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default function Feed() {
  return (
    <Query
      query={gql`
        {
          feed(skip: 4, first: 2) {
            posts {
              id
              title
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.feed.posts.map(({ id, title }) => (
          <div key={id}>
            <p>{title}</p>
          </div>
        ))
      }}
    </Query>
  )
}
