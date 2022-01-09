import React from 'react';
import { h3 } from '../styles/common-styles';
import { createListItemsFromStringArray } from '../util/util-functions';

interface SkillsProps {
  title: string;
  skillList: string[];
}

export default function Skills(props: SkillsProps) {
  const { title, skillList } = props;
  return (
    <div className="mb-4 md:mb-0">
      <h3 className={`${h3} mb-3`}>{title}</h3>
      <ul className="list-disc pl-4 text-gray-400">
        {createListItemsFromStringArray(skillList, 'text-sm mb-1')}
      </ul>
    </div>
  );
}
