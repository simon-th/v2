import * as React from 'react';

import portrait from '../images/portrait.jpg';

function WelcomeHeader() {
  return (
    <div className="h-fit flex pb-6">
      <div className="flex flex-col justify-center pr-5 md:pr-6">
        <img
          src={portrait}
          className="object-cover h-24 md:h-32 xl:h-36 w-auto rounded-full"
        ></img>
      </div>
      <div className="h-auto flex flex-col justify-center">
        <p className="text-3xl md:text-4xl xl:text-6xl font-bold">{'Hi,'}</p>
        <h1 className="text-3xl md:text-4xl xl:text-6xl pb-1 font-bold">
          {"I'm Simon Hoque."}
        </h1>
        <h2 className="text-xl xl:text-2xl font-semibold">
          {'Software Engineer @ Amazon'}
        </h2>
      </div>
    </div>
  );
}

function IndexPage() {
  return (
    <main>
      <div className="container mx-auto py-20">
        <WelcomeHeader />
        <p className="text-lg">
          {
            "Hi! My name is Simon and I'm a recently graduated software engineer based in Austin, TX. Stay tuned for updates to this site!"
          }
        </p>
      </div>
    </main>
  );
}

export default IndexPage;
