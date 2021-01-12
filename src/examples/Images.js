import React from 'react'
import "../components/layout.css"
import { useStaticQuery, graphql } from "gatsby";
import img from "../images/apo.jpg";
import Image from "gatsby-image";

const getImages=graphql`
{
    fixed:file(relativePath:{eq:"desert.jpg"}){
      childImageSharp{
        fixed(width:300,height:400,grayscale:true){
          ...GatsbyImageSharpFixed
        }
      }
    }
    
     fluid:file(relativePath:{eq:"desert.jpg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    
  }
`


export default function Img() {
    const data=useStaticQuery(getImages)

    return (<section className="images">
            <article className="single-image">
                <h3>basic image</h3>
                <img src={img} width="100%"></img>
            </article>
            <article className="single-image">
                <h3>fixed image</h3>
                <Image fixed={data.fixed.childImageSharp.fixed}></Image>
            </article>
            <article className="single-image">
                <h3>fluid image</h3>
                <Image fixed={data.fluid.childImageSharp.fluid}></Image>
            </article>
        </section>
    )
}
