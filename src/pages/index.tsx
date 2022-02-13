import React from "react"
import { Heading, Link, Box, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { ImageBanner } from "../components/Shared/imageBanner/ImageBanner"

const IndexPage = (): JSX.Element => {
  const data = {
    imageBanner: {
      title: "Prevedieme Vás ťažkou životnou situáciou",
      description:
        "Krátky text v tejto veľkosti o osobnom prístupe. Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní individuálnych pohrebných služieb v rámci Bratislavy a SR",
      button: "Ako postupovať pri zabezpečení pohrebu?",
    },
    whyUs: {
      title: "Prečo sa rozhodnúť pre nás?",
      description:
        "Veríme že v ťažkých životných situáciach odceníte náš individuálny prístup, profesionalitu a pochopenie. Máme dlhoročné skúseností v poskytovaní pohrebných služieb na profesionálnej úrovni.",
      items: [
        {
          title: "Profesinálne služby",
          description:
            "Viac ako 15 ročné skúsenosti v oblasti pohrebných služieb",
        },
        {
          title: "Pochopenie a úcta",
          description:
            "Sme empatický kolektív a našu prácu považujeme za poslanie",
        },
        {
          title: "Individuálny prístup",
          description: "Budeme Vás sprevádzať celým procesom odchodu zoznulého",
        },
      ],
      button: "Chcete vedieť viac?",
    },
  }

  const imgData = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "index/index_ImageBanner.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log("🚀 ~ file: index.tsx ~ line 51 ~ imgData", imgData)
  console.log("🚀 ~ file: index.tsx ~ line 23 ~ data", data)

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBanner {...data.imageBanner} imgData={imgData} />
    </Layout>
  )
}

export default IndexPage
