import React from 'react';
const ClientSideOnlyLazy = React.lazy(() =>
  import('components/Particles')
)

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Creatives from 'components/Creatives';

const IndexPage: React.FC = () => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout> 
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
      <hr />
      <Creatives />
    </Layout>
  );
};

export default IndexPage;
