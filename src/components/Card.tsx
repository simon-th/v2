import React from 'react';

interface CardStyle {
  cardClassName: string;
  headerClassName: string;
  bodyClassName: string;
  footerClassName: string;
}

interface CardContent {
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

export function buildHomepageCard(content: CardContent): JSX.Element {
  const { headerContent, bodyContent, footerContent } = content;
  return (
    <Card
      cardClassName="flex flex-col border-4 border-gray rounded-xl p-4 h-56 w-full"
      headerClassName="font-semibold text-xl justify-self-start break-words text-ellipsis"
      bodyClassName="h-full py-3 break-words text-ellipsis"
      footerClassName="text-sm text-gray-700 justify-self-end break-words text-ellipsis"
      headerContent={headerContent}
      bodyContent={bodyContent}
      footerContent={footerContent}
    />
  );
}
