import { About } from '@/components/Sections/About/About';
import { Experiences } from '@/components/Sections/Experiences/Experiences';
import { WhyUs } from '@/components/Sections/WhyUs/WhyUs';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = (): JSX.Element => {
  const fetchData = useStaticQuery(graphql`
    fragment SmallImg on File {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      WhyUsImg1: file(relativePath: { eq: "index/WhyUsImg1.png" }) {
        ...SmallImg
      }
      WhyUsImg2: file(relativePath: { eq: "index/WhyUsImg2.png" }) {
        ...SmallImg
      }

      WhyUsImg3: file(relativePath: { eq: "index/WhyUsImg3.png" }) {
        ...SmallImg
      }
      Logo: file(relativePath: { eq: "logo-column.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ImageParagraphLogo: file(
        relativePath: { eq: "about/ImageParagraphLogo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const data = {
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
    about: {
      image: fetchData.ImageParagraphLogo,
      logo: fetchData.Logo,
      title: 'O nás',
      description:
        'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR',
      headDiscAndContent: {
        title: 'Informácie pre zákazníkov',
        description:
          'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
        items: [
          'Informačný text k pohrebnej službe',
          'Druhý Informačný text k pohrebnej službe',
          'Tretí Informačný text k pohrebnej službe',
          'Štvrtý Informačný text k pohrebnej službe',
        ],
        text: 'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
      },
      headAdnDisc: {
        title: 'Iná dôležitá informácia',
        description:
          'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
      },
    },
  };
  return (
    <Layout>
      <SEO title="O nás" />
      <About {...data.about} />
      <WhyUs {...data.whyUs} />
      <Experiences {...data.experiences} />
    </Layout>
  );
};

export default AboutPage;
