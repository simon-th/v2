import React from 'react';
import { p, h3 } from '../styles/common-styles';

export interface ListCardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export default function ListCard(props: ListCardProps) {
  const { header, body, footer } = props;
  return (
    <div className="flex flex-col h-fit py-4">
      <div className={`${h3} mb-2`}>{header}</div>
      <div className={`${p} text-slate-400 h-full pb-6`}>{body}</div>
      <div className="text-xs justify-self-end">{footer}</div>
    </div>
  );
}
