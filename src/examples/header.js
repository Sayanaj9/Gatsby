import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData=graphql`
query myQuery{
  site {
    siteMetadata {
      title
      description
      person {
        age
        name
      }
      author
      data
    }
  }
}
`

const ComponentName = () => {
  //destructuring
  const {site:{
    siteMetadata:{
      title,
      person:{
        name
      }
    }
  }} = useStaticQuery(getData)
  return (
    <div>
      <h2>{title}</h2>
      <h4>{name}</h4>
    </div>
  )
}

export default ComponentName
