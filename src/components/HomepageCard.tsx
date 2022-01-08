import React from 'react';
import Card, { CardContent } from './Card';

export default function HomepageCard(props: CardContent) {
  const { headerContent, bodyContent, footerContent } = props;
  return (
    <button type="button" className="content-start text-left">
      <div className="flex justify-center">
        <Card
          cardClassName="flex flex-col border-2 border-gray-800 bg-gray-900 rounded-xl p-4 h-56 w-96 max-w-full md:w-full hover:-translate-y-2 duration-500 transition ease-in-out"
          headerClassName="font-semibold text-lg justify-self-start break-words text-ellipsis"
          bodyClassName="h-full text-sm py-3 break-words text-ellipsis"
          footerClassName="text-xs text-gray-400 justify-self-end break-words text-ellipsis"
          headerContent={headerContent}
          bodyContent={bodyContent}
          footerContent={footerContent}
        />
      </div>
    </button>
  );
}
