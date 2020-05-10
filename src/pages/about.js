import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I sometimes take notes and like to have them available on mobile. I plan
      to put it here since MDX and Gatsby play really well together.
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
