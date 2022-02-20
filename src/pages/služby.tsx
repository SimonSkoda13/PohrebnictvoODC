import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { Services } from '@/components/Sections/Services/Services';
import { Container } from '@/components/Shared/Container/Container';
import { HeadAdnDisc } from '@/components/Shared/HeadAndDisc/HeadAdnDisc';
import { ServicesWithImageBanner } from '@/components/Sections/ServicesWithImageBanner/Since';

const ServicesPage = (): JSX.Element => {
  const fetchData = useStaticQuery(graphql`
    fragment BannerImage on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
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
      ServicesWithImageBanner1: file(
        relativePath: { eq: "sluzby/ServicesWithImageBanner1.png" }
      ) {
        ...BannerImage
      }
      ServicesWithImageBanner2: file(
        relativePath: { eq: "sluzby/ServicesWithImageBanner2.png" }
      ) {
        ...BannerImage
      }
      ServicesWithImageBanner3: file(
        relativePath: { eq: "sluzby/ServicesWithImageBanner3.png" }
      ) {
        ...BannerImage
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
    }
  `);
  console.log('🚀 ~ file: index.tsx ~ line 59 ~ fetchData', fetchData);
  const data = {
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
    },
    since: {
      title: 'Sme tu pre Vás od roku 2007',
      description:
        'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
    },
    items: [
      {
        imageBanner: {
          title: 'Pohrebné služby',
          description:
            'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR',
          imgData: fetchData.ServicesWithImageBanner1,
        },
        content: {
          headDiscAndContent: {
            title: 'Informácie ohľadom Pohrebných služieb',
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
          other: {
            title: 'Iná dôležitá informácia',
            description:
              'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
          },
          button: { text: 'Zavolajte nám +421 905 309 755' },
        },
      },
      {
        imageBanner: {
          title: 'Ponuka truhiel',
          description:
            'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR',
          imgData: fetchData.ServicesWithImageBanner2,
        },
        content: {
          headDiscAndContent: {
            title: 'Informácie ohľadom Truhiel',
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
          other: {
            title: 'Iná dôležitá informácia',
            description:
              'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
          },
          button: { text: 'Zavolajte nám +421 905 309 755' },
        },
      },
      {
        imageBanner: {
          title: 'Kvety a vence',
          description:
            'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR',
          imgData: fetchData.ServicesWithImageBanner3,
        },
        content: {
          headDiscAndContent: {
            title: 'Informácie ohľadom Truhiel',
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
          other: {
            title: 'Iná dôležitá informácia',
            description:
              'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR. Prioritou Pohrebnej služby ODO s.r.o. je poskytovať kvalitné služby za čo najnižšie ceny v rámci Bratislavy.',
          },
          button: { text: 'Zavolajte nám +421 905 309 755' },
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO title="Služby" />
      <Services {...data.services} buttonTo="služby" />
      <Container>
        <HeadAdnDisc {...data.since} isCentered />
      </Container>
      <ServicesWithImageBanner {...{ items: data.items }} />
    </Layout>
  );
};

export default ServicesPage;
