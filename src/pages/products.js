import React from 'react'
import Layout from '../components/layout';
import styles from '../components/products.module.css';
import Image from "gatsby-image";
import {Link} from "gatsby";
import {graphql } from "gatsby";

export const data=graphql`
query MyProduct {
    allContentfulProduct {
        nodes {
          price
          title
          image {
            fluid {
                ...GatsbyContentfulFluid
            }
          }
          id
          slug
        }
      }
  }
  
`



export default function Products({data}) {
    const {allContentfulProduct:{nodes:products}}=data
    return (
        <Layout>
            <section className={styles.page}>
            {products.map((prod)=>{
                    return (<article className={styles.page} key={prod.id}>
                          <Image fluid={prod.image.fluid}>{prod.title}</Image>
                          <h3>{prod.title} <span>{prod.price}</span></h3>
                          <Link to={`/products/${prod.slug}`}>more details</Link>
                        </article>)
                    })}
            </section>
         
        </Layout>
    )
}
