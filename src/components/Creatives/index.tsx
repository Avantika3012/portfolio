import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Creative {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      videoSourceURL: string;
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Creatives: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "creatives section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "creatives" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              videoSourceURL
              cover {
                childImageSharp {
                  fluid(maxWidth: 50, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const creatives: Creative[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Creatives>
        <Carousel>
          {creatives.map((item) => {
            const {
              id,
              html,
              frontmatter: { title, videoSourceURL }
            } = item.node;

            return (
              <Styled.Creative className="video-carousel" key={id}>
                <Styled.Frame width="60%" height="20%" src={videoSourceURL}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
              </Styled.Creative>
            );
          })}
        </Carousel>
      </Styled.Creatives>
    </Container>
  );
};

export default Creatives;
