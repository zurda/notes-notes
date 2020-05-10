import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  margin-top: 0;

  /* override the default margin for sibling elements  */
  > * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #7edbf2dd 2rem, #7edbf200);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0.5rem calc((100vw - 1050px - 0.5rem) / 2);
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a,
  a:visited {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "damian-zaleski-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>
          Zurda{' '}
          <span role="img" aria-label="Coffee emoji">
            &#9749;
          </span>
        </h1>
        <p>
          Some notes about things{' '}
          <Link to="/about/">
            Learn about me{' '}
            <span role="img" aria-label="Right arrow">
              &rarr;
            </span>
          </Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
