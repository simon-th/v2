import React from 'react';

interface TagProps {
  textClass: string;
  bgClass: string;
  text: string;
}

export default function Tag(props: TagProps) {
  const { textClass, bgClass, text } = props;
  return (
    <div
      className={`${textClass} ${bgClass} h-fit rounded-md py-1 px-2 whitespace-nowrap`}
    >
      {text}
    </div>
  );
}
