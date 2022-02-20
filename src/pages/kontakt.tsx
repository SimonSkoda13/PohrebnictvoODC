import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = (): JSX.Element => {
  const fetchData = useStaticQuery(graphql`
    query SiteQuery {
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
    contacts: {
      title: 'Kontakty',
      items: fetchData.site.siteMetadata.contacts,
    },
    invoiceAdress: {
      title: 'Kontakty',
      items: fetchData.site.siteMetadata.contacts,
    },
    WhereWeAre: {
      title: 'Kde nás nájdete ',
    },
  };

  return (
    <Layout>
      <SEO title="Kontakt" />
    </Layout>
  );
};

export default IndexPage;
