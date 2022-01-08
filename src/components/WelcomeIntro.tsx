import React from 'react';

export default function WelcomeIntro() {
  const linkHoverEffectClass =
    'relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300';
  const paragraphClass = 'text-md md:text-lg xxl:text-xl mb-4';
  return (
    <div>
      <p className={paragraphClass}>
        Hi! My name is Simon and I&apos;m a recently graduated software engineer
        based in Austin, TX. I am currently working at Amazon, where I build
        cloud-native, highly scalable software to improve safety for thousands
        of Amazon employees around the globe.
      </p>
      <p className={paragraphClass}>
        In my free time, I really enjoy{' '}
        <span>
          <a
            className={linkHoverEffectClass}
            href="https://www.simon-th.github.io/photo"
          >
            photography
          </a>
        </span>
        , bouldering (when I&apos;m not injured...), and exploring Austin. I
        also love{' '}
        <span>
          <a
            className={linkHoverEffectClass}
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
