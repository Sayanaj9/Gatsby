import React from 'react';
import Header from '../examples/header';
import {graphql} from "gatsby"

export default function example({data}) {
    const {site:{info:{author}}}=data;
    return (
        <div>
            <Header/>
            <h1>{author}</h1>
        </div>
    )
}

export const data=graphql
`query MyQuery {
    site{
      info:siteMetadata{
        title
        description
        person{
          age
          name
        }
        author
        data
        
      }
    }
  }
  `
