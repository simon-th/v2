import React from 'react';
import Layout from '../components/Layout';
import Position from '../components/Position';
import ExperienceInfo from '../content/experience.json';
import { createParagraphsFromStringArray } from '../util/util-functions';

export default function ExperiencePage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold pb-5">Background</h1>
      {createParagraphsFromStringArray(ExperienceInfo.background)}
      <h1 className="text-3xl font-bold py-5">Current Position</h1>
      <Position
        company={ExperienceInfo.currentPosition.company}
        position={ExperienceInfo.currentPosition.position}
        time={ExperienceInfo.currentPosition.time}
        details={ExperienceInfo.currentPosition.details}
        initialDropdownStatus
      />
      <h1 className="text-3xl font-bold py-5">Previous Positions</h1>
    </Layout>
  );
}
