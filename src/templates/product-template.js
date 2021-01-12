import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/layout';
import Image from "gatsby-image";



const ComponentName = ({ data:{ product :{ price,title,image:{fixed},info:{info}}} }) => {
    return <Layout>
        <div style={{textAlign:"center"}}>
            <Link to="/products">back to products</Link>

        </div>
        <section className="single-product">
            <article>
                <Image fixed={fixed} alt={title}></Image>
            </article>
            <article>
                <h1>{title}</h1>
                <p>{info}</p>
            </article>
        </section>
    </Layout>
}

export const query = graphql`
query GetSingleProduct($slug:String) {
    product:contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed(width:300) {
          ...GatsbyContentfulFixed 
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
