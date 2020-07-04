import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
  image: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText, image }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <img src={image} alt="Azure Badge" width="10%" height="10%" />
      <img src="https://img.techpowerup.org/200704/aws-badge689.png" alt="AWS Badge" width="10%" height="10%" />
      <Styled.Content>{content}</Styled.Content>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
