import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from '@/components/Shared/Container/Container';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { SectionHeading } from '@/components/Shared/SectionHeading/SectionHeading';
import { HeadDiscAndContent } from '@/components/Shared/HeadDiscAndContent/HeadDiscAndContent';

const ContactPage = (): JSX.Element => {
  const fetchData = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          contacts
          invoiceAdress
        }
      }
    }
  `);
  const data = {
    info: {
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
    leftGrid: [
      {
        title: 'Kontakty',
        items: fetchData.site.siteMetadata.contacts,
      },
      {
        title: 'Fakturačná adresa',
        items: fetchData.site.siteMetadata.invoiceAdress,
      },
    ],
    WhereWeAre: {
      title: 'Kde nás nájdete',
    },
  };

  return (
    <Layout>
      <SEO title="Kontakt" />
      <Container>
        <SimpleGrid columns={{ md: 2, base: 1 }}>
          <Flex flexDir="column">
            {data.leftGrid.map((item) => {
              return (
                <Flex flexDir="column" mb={8}>
                  <SectionHeading title={item.title} mb={4} />
                  {item.items.map((item) => {
                    return <Box>{item}</Box>;
                  })}
                </Flex>
              );
            })}
          </Flex>
          <Flex flexDir="column" mb={8}>
            <SectionHeading title={data.WhereWeAre.title} mb={4} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.6330745558666!2d17.1093667156476!3d48.098022179220244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89c84c720dd1%3A0xd230a87276e0401!2sODO%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1645385026645!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </Flex>
        </SimpleGrid>
        <HeadDiscAndContent {...data.info} isSectionHeading mt={4} />
      </Container>
    </Layout>
  );
};

export default ContactPage;
