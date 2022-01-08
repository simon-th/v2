import React from 'react';
import Card, { CardContent } from './Card';

export default function HomepageCard(props: CardContent) {
  const { headerContent, bodyContent, footerContent } = props;
  return (
    <button type="button" className="content-start text-left">
      <div className="flex justify-center">
        <Card
          cardClassName="flex flex-col border-4 border-gray rounded-xl p-4 h-56 w-96 max-w-full md:w-full hover:-translate-y-1 transition ease-in-out"
          headerClassName="font-semibold text-xl justify-self-start break-words text-ellipsis"
          bodyClassName="h-full py-3 break-words text-ellipsis"
          footerClassName="text-sm text-gray-700 justify-self-end break-words text-ellipsis"
          headerContent={headerContent}
          bodyContent={bodyContent}
          footerContent={footerContent}
        />
      </div>
    </button>
  );
}
