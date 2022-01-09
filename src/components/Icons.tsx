import React from 'react';

/**
 * Icons sourced from https://www.tablericons.com
 */

interface IconProps {
  size: number;
}

// eslint-disable-next-line import/prefer-default-export
export function Mail(props: IconProps) {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${size} h-${size} stroke-white icon icon-tabler icon-tabler-mail`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

export function GitHub(props: IconProps) {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${size} h-${size} stroke-white icon icon-tabler icon-tabler-brand-github`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

export function ExternalLink(props: IconProps) {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${size} h-${size} stroke-white icon icon-tabler icon-tabler-external-link`}
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
      <line x1="10" y1="14" x2="20" y2="4" />
      <polyline points="15 4 20 4 20 9" />
    </svg>
  );
}

export function Documentation(props: IconProps) {
  const { size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${size} h-${size} stroke-white icon icon-tabler icon-tabler-file-text`}
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <line x1="9" y1="9" x2="10" y2="9" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}
