import React from 'react';
import Layout from '../components/Layout';
import { h1 } from '../styles/common-styles';

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className={`${h1}`}>Projects</h1>
    </Layout>
  );
}
