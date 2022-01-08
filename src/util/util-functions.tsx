import React from 'react';
import { paragraphClass } from '../styles/common-styles';

export function createListItemsFromStringArray(
  inputArray: string[]
): JSX.Element[] {
  const htmlList: JSX.Element[] = [];
  inputArray.forEach((item) => {
    htmlList.push(<li className={paragraphClass}>{item}</li>);
  });
  return htmlList;
}

export function createParagraphsFromStringArray(
  inputArray: string[]
): JSX.Element[] {
  const paragraphs: JSX.Element[] = [];
  inputArray.forEach((paragraph) => {
    paragraphs.push(<p className={paragraphClass}>{paragraph}</p>);
  });
  return paragraphs;
}
