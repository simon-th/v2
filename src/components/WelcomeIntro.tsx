import React from 'react';
import { p, linkHoverEffect } from '../styles/common-styles';

export default function WelcomeIntro() {
  return (
    <div>
      <p className={`${p} mb-4`}>
        Hi! My name is Simon and I&apos;m a recently graduated software engineer
        based in Austin, TX. I am currently working at Amazon, where I build
        cloud-native, highly scalable software to improve safety for thousands
        of Amazon employees around the globe.
      </p>
      <p className={p}>
        In my free time, I really enjoy{' '}
        <span>
          <a
            className={linkHoverEffect}
            href="https://www.simon-th.github.io/photo"
          >
            photography
          </a>
        </span>
        , bouldering (when I&apos;m not injured...), and exploring the
        coffeeshops and streets of Austin. I also love{' '}
        <span>
          <a
            className={linkHoverEffect}
            href="https://www.simon-th.github.io/travel"
          >
            traveling
          </a>
        </span>
        , I&apos;d love to visit Japan, Iceland, and the National Parks on the
        West Coast in the near future.
      </p>
    </div>
  );
}
