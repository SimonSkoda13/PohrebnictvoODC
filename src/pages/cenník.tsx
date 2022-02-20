import { Experiences } from '@/components/Sections/Experiences/Experiences';
import { WhyUs } from '@/components/Sections/WhyUs/WhyUs';
import { IButton } from '@/components/Shared/Button/Button';
import { Container } from '@/components/Shared/Container/Container';
import { HeadAdnDisc } from '@/components/Shared/HeadAndDisc/HeadAdnDisc';
import { HeadDiscAndContent } from '@/components/Shared/HeadDiscAndContent/HeadDiscAndContent';
import { ImageParagraph } from '@/components/Shared/ImageParagraph/ImageParagraph';
import { SectionHeading } from '@/components/Shared/SectionHeading/SectionHeading';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PriceListPage = (): JSX.Element => {
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

    title: 'Cenník pohrebných služieb',
    description:
      'Pohrebná služba ODO s.r.o. má dlhoročné skúseností v poskytovaní pohrebných služieb v rámci Bratislavy a SR',
    versions: [
      {
        title: 'Varianta smútočného obradu č.1',
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
      {
        title: 'Varianta smútočného obradu č.2',
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
    ],
    info: {
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
      <SEO title="O nás" />
      <Container>
        <SectionHeading {...data} my={10} />
      </Container>
      <Flex background="primary">
        <Container>
          <SimpleGrid columns={{ md: 2, base: 1 }} spacing={5}>
            {data.versions.map((item) => {
              return <HeadDiscAndContent {...item} color="white" />;
            })}
          </SimpleGrid>
        </Container>
      </Flex>

      <Container>
        <HeadDiscAndContent
          {...data.info.headDiscAndContent}
          isSectionHeading
        />
        <HeadAdnDisc {...data.info.other} />
      </Container>
      <ImageParagraph {...data.advance} isImageOnTheLeft>
        <Container>
          {data.advance.items.map((item) => {
            return <HeadAdnDisc {...item} />;
          })}
          <Flex justifyContent={{ md: 'left', base: 'center' }}>
            <IButton text={data.advance.button} />
          </Flex>
        </Container>
      </ImageParagraph>
      <Container>
        <Experiences {...data.experiences} />
      </Container>
    </Layout>
  );
};

export default PriceListPage;
