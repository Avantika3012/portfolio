import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Email extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitPlaceholder: string;
}

const Email: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "email section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          messagePlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const email: Email = markdownRemark.frontmatter;

  return (
    <Styled.Email>
      <Container section>
        <TitleSection title={email.title} subtitle={email.subtitle} center />
        <Styled.Form>
          <Styled.Input type="text" placeholder={email.namePlaceholder} />
          <Styled.Input type="email" placeholder={email.emailPlaceholder} />
          <Styled.Message  placeholder={email.messagePlaceholder} />
          <Button primary block>
            {email.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Email>
  );
};

export default Email;
