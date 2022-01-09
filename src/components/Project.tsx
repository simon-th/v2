import React from 'react';
import { Documentation, ExternalLink, GitHub } from './Icons';
import ListCard from './ListCard';
import Tag from './Tag';

export interface ProjectProps {
  title: string;
  description: string;
  languages: string[];
  technologies: string[];
  details: string[];
  links: {
    gitHub?: string;
    docs?: string;
    demo?: string;
  };
}

export default function Project(props: ProjectProps) {
  const { title, description, languages, technologies, details, links } = props;
  const { gitHub, demo, docs } = links;
  const header = <div>{title}</div>;
  const body = <div>{description}</div>;
  const footer = (
    <div className="w-full flex justify-between">
      <div className="flex flex-wrap h-fit gap-3">
        {languages.map((language) => (
          <Tag
            textClass="text-sky-200 font-bold"
            bgClass="bg-sky-900"
            text={language}
          />
        ))}
        {technologies.map((technology) => (
          <Tag
            textClass="text-teal-200 font-semibold"
            bgClass="bg-teal-900"
            text={technology}
          />
        ))}
      </div>
      <div className="pl-6 flex gap-4 transition ease-in-out">
        {docs ? (
          <a href={docs} className="hover:scale-110">
            <Documentation size={5} />
          </a>
        ) : null}
        {demo ? (
          <a href={demo} className="hover:scale-110">
            <ExternalLink size={5} />
          </a>
        ) : null}
        {gitHub ? (
          <a href={gitHub} className="hover:scale-110">
            <GitHub size={5} />
          </a>
        ) : null}
      </div>
    </div>
  );

  return <ListCard header={header} body={body} footer={footer} />;
}
