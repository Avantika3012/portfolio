import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';

const ProjectPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Project" />
      <Posts />
    </Layout>
  );
};

export default ProjectPage;
