import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageBanner } from '../components/Shared/ImageBanner/ImageBanner';
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
  const data = {
    imageBanner: {
      title: 'Prevedieme V??s ??a??kou ??ivotnou situ??ciou',
      description:
        'Kr??tky text v tejto ve??kosti o osobnom pr??stupe. Pohrebn?? slu??ba ODO s.r.o. m?? dlhoro??n?? sk??senost?? v poskytovan?? individu??lnych pohrebn??ch slu??ieb v r??mci Bratislavy a SR',
      button: 'Ako postupova?? pri zabezpe??en?? pohrebu?',
    },
    whyUs: {
      title: 'Pre??o sa rozhodn???? pre n??s?',
      description:
        'Ver??me ??e v ??a??k??ch ??ivotn??ch situ??ciach odcen??te n???? individu??lny pr??stup, profesionalitu a pochopenie. M??me dlhoro??n?? sk??senost?? v poskytovan?? pohrebn??ch slu??ieb na profesion??lnej ??rovni.',
      items: [
        {
          title: 'Profesin??lne slu??by',
          description:
            'Viac ako 15 ro??n?? sk??senosti v oblasti pohrebn??ch slu??ieb',
          imgData: fetchData.WhyUsImg1,
        },
        {
          title: 'Pochopenie a ??cta',
          description:
            'Sme empatick?? kolekt??v a na??u pr??cu pova??ujeme za poslanie',
          imgData: fetchData.WhyUsImg2,
        },
        {
          title: 'Individu??lny pr??stup',
          description: 'Budeme V??s sprev??dza?? cel??m procesom odchodu zoznul??ho',
          imgData: fetchData.WhyUsImg3,
        },
      ],
      button: 'Chcete vedie?? viac?',
    },
    services: {
      title: 'Pohrebn?? slu??by',
      description:
        'Pohrebn?? slu??ba ODO s.r.o. m?? dlhoro??n?? sk??senost?? v poskytovan?? pohrebn??ch slu??ieb v r??mci Bratislavy a SR.',
      items: [
        {
          title: 'Pohrebn?? slu??by',
          description: 'Pon??kame komplexn?? zabezpe??enie pohrebu',
          imgData: fetchData.Services1,
        },
        {
          title: 'Ponuka truhiel',
          description:
            '??irok?? v??ber truhiel od cenovo dostupn??ch a?? po pr??miov??',
          imgData: fetchData.Services2,
        },
        {
          title: 'Kytice a vence',
          description: 'Via??eme sm??to??n?? kytice a vence pod??a Va??ich prian??',
          imgData: fetchData.Services3,
        },
      ],
      button: 'Chcete vedie?? viac?',
      logo: fetchData.logo_row,
    },
    advance: {
      image: fetchData.Advance,
      title: 'Ako postupova?? pri zabezpe??en?? pohrebu?',
      description:
        'Pohrebn?? slu??ba ODO s.r.o. m?? dlhoro??n?? sk??senost?? v poskytovan?? pohrebn??ch slu??ieb v r??mci Bratislavy a SR',
      items: [
        {
          title: 'Pohrebn?? slu??by',
          description: 'Pon??kame komplexn?? zabezpe??enie pohrebu',
          imgData: fetchData.Services1,
        },
        {
          title: 'Ponuka truhiel',
          description:
            '??irok?? v??ber truhiel od cenovo dostupn??ch a?? po pr??miov??',
          imgData: fetchData.Services2,
        },
        {
          title: 'Kytice a vence',
          description: 'Via??eme sm??to??n?? kytice a vence pod??a Va??ich prian??',
          imgData: fetchData.Services3,
        },
      ],
      button: 'Zavolajte n??m +421 905 309 755',
    },
    experiences: {
      title: 'Sk??senosti na??ich z??kazn??kov',
      description:
        'Ver??me ??e v ??a??k??ch ??ivotn??ch situ??ciach odcen??te n???? individu??lny pr??stup, profesionalitu a pochopenie. M??me dlhoro??n?? sk??senost?? v poskytovan?? pohrebn??ch slu??ieb na profesion??lnej ??rovni. ',
      items: [
        {
          title: 'M. Kov????ov??',
          description:
            '??akujeme pohrebnes slu??be ODO za promptn?? vybavenie pohrebu a pomoc ktor?? n??m poskytli. Odcenujeme najm?? ich individu??lny pr??stup.',
        },
        {
          title: 'T. Osusk??',
          description:
            '??akujeme pohrebnes slu??be ODO za promptn?? vybavenie pohrebu a pomoc ktor?? n??m poskytli. Odcenujeme najm?? ich individu??lny pr??stup.',
        },
        {
          title: 'A. Tk????ov??',
          description:
            '??akujeme pohrebnes slu??be ODO za promptn?? vybavenie pohrebu a pomoc ktor?? n??m poskytli. Odcenujeme najm?? ich individu??lny pr??stup.',
        },
      ],
    },
  };

  return (
    <Layout>
      <SEO title="Domov" />
      <ImageBanner
        {...data.imageBanner}
        imgData={fetchData.ImageBanner}
        isCentered={true}
        link="slu??by"
      />
      <WhyUs {...data.whyUs} buttonTo="slu??by" />
      <Services {...data.services} buttonTo="slu??by" />
      <Advance {...data.advance} isImageOnTheLeft />
      <Experiences {...data.experiences} />
    </Layout>
  );
};

export default IndexPage;
