import React from 'react';
import Layout from '../components/Layout';
import Position, { PositionJSONProps } from '../components/Position';
import Skills from '../components/Skills';
import ExperienceInfo from '../content/experience.json';
import { h1 } from '../styles/common-styles';
import { createParagraphsFromStringArray } from '../util/util-functions';

function getPreviousPositions(): JSX.Element[] {
  const positions: JSX.Element[] = [];
  ExperienceInfo.previousPositions.forEach((position: PositionJSONProps) => {
    positions.push(
      <Position
        company={position.company}
        position={position.position}
        time={position.time}
        details={position.details}
        initialDropdownStatus={false}
      />
    );
  });
  return positions;
}

function getSkills(): JSX.Element {
  return (
    <div className="grid grid-col-1 md:grid-cols-3">
      <Skills
        title="Programming Languages"
        skillList={ExperienceInfo.languages}
      />
      <Skills
        title="Software Technologies"
        skillList={ExperienceInfo.softwareTech}
      />
      <Skills title="Data Technologies" skillList={ExperienceInfo.dataTech} />
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <Layout>
      <h1 className={`${h1}`}>Background</h1>
      {createParagraphsFromStringArray(ExperienceInfo.background)}
      <h1 className={`${h1} mt-12`}>Current Position</h1>
      <Position
        company={ExperienceInfo.currentPosition.company}
        position={ExperienceInfo.currentPosition.position}
        time={ExperienceInfo.currentPosition.time}
        details={ExperienceInfo.currentPosition.details}
        initialDropdownStatus
      />
      <h1 className={`${h1} mt-12`}>Previous Positions</h1>
      {getPreviousPositions()}
      <h1 className={`${h1} mt-12`}>Skills</h1>
      {getSkills()}
    </Layout>
  );
}
