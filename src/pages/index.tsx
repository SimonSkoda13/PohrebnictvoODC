import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageBanner } from '../components/Shared/imageBanner/ImageBanner';
import { WhyUs } from '../components/Sections/WhyUs/WhyUs';
import { Services } from '@/components/Sections/Services/Services';
import { Advance } from '@/components/Sections/Advance/Advance';
import { Experiences } from '@/components/Sections/Experiences/Experiences';


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
    fragment ServicesImg on File {
      childImageSharp {
        fluid(maxWidth: 350) {
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
      Services1: file(relativePath: { eq: "index/Services1.png" }) {
        ...ServicesImg
      }
      Services2: file(relativePath: { eq: "index/Services2.png" }) {
        ...ServicesImg
      }
      Services3: file(relativePath: { eq: "index/Services3.png" }) {
        ...ServicesImg
      }
      logo_row: file(relativePath: { eq: "logo-row.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Advance: file(relativePath: { eq: "index/Advance.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log('🚀 ~ file: index.tsx ~ line 59 ~ fetchData', fetchData);
  const data = {
    imageBanner: {
      title: 'Prevedieme Vás ťažkou životnou situáciou',
      description:
        'Krátky text v tejto veľkosti o osobnom prístupe. Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní individuálnych pohrebných služieb v rámci Bratislavy a SR',
      button: 'Ako postupovať pri zabezpečení pohrebu?',
    },
    whyUs: {
      title: 'Prečo sa rozhodnúť pre nás?',
      description:
        'Veríme že v ťažkých životných situáciach odceníte náš individuálny prístup, profesionalitu a pochopenie. Máme dlhoročné skúseností v poskytovaní pohrebných služieb na profesionálnej úrovni.',
      items: [
        {
          title: 'Profesinálne služby',
          description:
            'Viac ako 15 ročné skúsenosti v oblasti pohrebných služieb',
          imgData: fetchData.WhyUsImg1,
        },
        {
          title: 'Pochopenie a úcta',
          description:
            'Sme empatický kolektív a našu prácu považujeme za poslanie',
          imgData: fetchData.WhyUsImg2,
        },
        {
          title: 'Individuálny prístup',
          description: 'Budeme Vás sprevádzať celým procesom odchodu zoznulého',
          imgData: fetchData.WhyUsImg3,
        },
      ],
      button: 'Chcete vedieť viac?',
    },
    services: {
      title: 'Pohrebné služby',
      description:
        'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR.',
      items: [
        {
          title: 'Pohrebné služby',
          description: 'Ponúkame komplexné zabezpečenie pohrebu',
          imgData: fetchData.Services1,
        },
        {
          title: 'Ponuka truhiel',
          description:
            'Široký výber truhiel od cenovo dostupných až po prémiové',
          imgData: fetchData.Services2,
        },
        {
          title: 'Kytice a vence',
          description: 'Viažeme smútočné kytice a vence podľa Vašich prianí',
          imgData: fetchData.Services3,
        },
      ],
      button: 'Chcete vedieť viac?',
      logo: fetchData.logo_row,
    },
    advance: {
      image: fetchData.Advance,
      title: 'Ako postupovať pri zabezpečení pohrebu?',
      description:
        'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR',
      items: [
        {
          title: 'Pohrebné služby',
          description: 'Ponúkame komplexné zabezpečenie pohrebu',
          imgData: fetchData.Services1,
        },
        {
          title: 'Ponuka truhiel',
          description:
            'Široký výber truhiel od cenovo dostupných až po prémiové',
          imgData: fetchData.Services2,
        },
        {
          title: 'Kytice a vence',
          description: 'Viažeme smútočné kytice a vence podľa Vašich prianí',
          imgData: fetchData.Services3,
        },
      ],
      button: 'Zavolajte nám +421 905 309 755',
    },
    experiences: {
      title: 'Skúsenosti našich zákazníkov',
      description:
        'Veríme že v ťažkých životných situáciach odceníte náš individuálny prístup, profesionalitu a pochopenie. Máme dlhoročné skúseností v poskytovaní pohrebných služieb na profesionálnej úrovni. ',
      items: [
        {
          title: 'M. Kováčová',
          description:
            'Ďakujeme pohrebnes službe ODO za promptné vybavenie pohrebu a pomoc ktorú nám poskytli. Odcenujeme najmä ich individuálny prístup.',
        },
        {
          title: 'T. Osuská',
          description:
            'Ďakujeme pohrebnes službe ODO za promptné vybavenie pohrebu a pomoc ktorú nám poskytli. Odcenujeme najmä ich individuálny prístup.',
        },
        {
          title: 'A. Tkáčová',
          description:
            'Ďakujeme pohrebnes službe ODO za promptné vybavenie pohrebu a pomoc ktorú nám poskytli. Odcenujeme najmä ich individuálny prístup.',
        },
      ],
    },
  };

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBanner
        {...data.imageBanner}
        imgData={fetchData.ImageBanner}
        isCentered={true}
        link="služby"
      />
      <WhyUs {...data.whyUs} buttonTo="služby" />
      <Services {...data.services} buttonTo="služby" />
      <Advance {...data.advance} isImageOnTheLeft />
      <Experiences {...data.experiences} />
    </Layout>
  );
};

export default IndexPage;
