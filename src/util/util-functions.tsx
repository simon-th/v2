import React from 'react';
import { p } from '../styles/common-styles';

export function createListItemsFromStringArray(
  inputArray: string[],
  className: string
): JSX.Element[] {
  const htmlList: JSX.Element[] = [];
  inputArray.forEach((item) => {
    htmlList.push(<li className={className}>{item}</li>);
  });
  return htmlList;
}

export function createParagraphsFromStringArray(
  inputArray: string[]
): JSX.Element[] {
  const paragraphs: JSX.Element[] = [];
  inputArray.forEach((paragraph) => {
    paragraphs.push(<p className={`${p} mb-4`}>{paragraph}</p>);
  });
  return paragraphs;
}
