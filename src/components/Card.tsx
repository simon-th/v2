import React from 'react';

interface CardStyle {
  cardClassName: string;
  headerClassName: string;
  bodyClassName: string;
  footerClassName: string;
}

export interface CardContent {
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
  footerContent: React.ReactNode;
}

type CardProps = CardStyle & CardContent;

export default function Card(props: CardProps) {
  const {
    cardClassName,
    headerClassName,
    bodyClassName,
    footerClassName,
    headerContent,
    bodyContent,
    footerContent,
  } = props;
  return (
    <div className={cardClassName}>
      <div className={headerClassName}>{headerContent}</div>
      <div className={bodyClassName}>{bodyContent}</div>
      <div className={footerClassName}>{footerContent}</div>
    </div>
  );
}
