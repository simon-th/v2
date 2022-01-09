import React from 'react';
import Layout from '../components/Layout';
import Project, { ProjectProps } from '../components/Project';
import ProjectInfo from '../content/projects.json';
import { h1, listBorder } from '../styles/common-styles';

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className={`${h1}`}>Projects</h1>
      <ul>
        {ProjectInfo.map((project: ProjectProps) => (
          <li className={listBorder}>
            <Project
              title={project.title}
              description={project.description}
              languages={project.languages}
              technologies={project.technologies}
              details={project.details}
              links={project.links}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
