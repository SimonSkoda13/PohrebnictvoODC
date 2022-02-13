import React from "react"
import { Heading, Link, Box, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { ImageBanner } from "../components/Shared/imageBanner/ImageBanner"
import { WhyUs } from "../components/Sections/WhyUs/WhyUs"

const IndexPage = (): JSX.Element => {
  const fetchData = useStaticQuery(graphql`
    fragment BannerImage on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fragment SmallImg on File {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      ImageBanner: file(relativePath: { eq: "index/ImageBanner.png" }) {
        ...BannerImage
      }

      WhyUsImg1: file(relativePath: { eq: "index/WhyUsImg1.png" }) {
        ...SmallImg
      }
      WhyUsImg2: file(relativePath: { eq: "index/WhyUsImg2.png" }) {
        ...SmallImg
      }

      WhyUsImg3: file(relativePath: { eq: "index/WhyUsImg3.png" }) {
        ...SmallImg
      }
    }
  `)
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
          imgData: fetchData.WhyUsImg1,
        },
        {
          title: "Pochopenie a úcta",
          description:
            "Sme empatický kolektív a našu prácu považujeme za poslanie",
          imgData: fetchData.WhyUsImg2,
        },
        {
          title: "Individuálny prístup",
          description: "Budeme Vás sprevádzať celým procesom odchodu zoznulého",
          imgData: fetchData.WhyUsImg3,
        },
      ],
      button: "Chcete vedieť viac?",
    },
  }
  console.log("🚀 ~ file: index.tsx ~ line 82 ~ data", data)

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBanner {...data.imageBanner} imgData={fetchData.ImageBanner} />
      <WhyUs {...data.whyUs} />
    </Layout>
  )
}

export default IndexPage
