import * as React from 'react';
import portrait from '../images/portrait.jpg';
import AboutInfo from '../content/about.json';
import Navbar from '../components/Navbar';

function WelcomeHeader() {
  return (
    <div className="h-fit flex pb-6">
      <div className="flex flex-col justify-center pr-5 md:pr-6">
        <img
          src={portrait}
          alt="Simon Hoque portrait"
          className="object-cover h-24 md:h-32 xl:h-36 w-auto rounded-full"
        />
      </div>
      <div className="h-auto flex flex-col justify-center">
        <p className="text-3xl md:text-4xl xl:text-6xl font-bold">
          {AboutInfo.welcomeLine1}
        </p>
        <h1 className="text-3xl md:text-4xl xl:text-6xl pb-1 font-bold">
          {AboutInfo.welcomeLine2}
        </h1>
        <h2 className="text-xl xl:text-2xl font-semibold">
          {AboutInfo.welcomeSubtext}
        </h2>
      </div>
    </div>
  );
}

function getIntro(): JSX.Element[] {
  const intro: JSX.Element[] = [];
  AboutInfo.intro.forEach((paragraph: string) => {
    intro.push(<p className="text-md md:text-lg mb-4">{paragraph}</p>);
  });
  return intro;
}

function WelcomeIntro() {
  return <div>{getIntro()}</div>;
}

function IndexPage() {
  return (
    <main className="min-h-screen h-screen max-h-full">
      <Navbar />
      <div className="container mx-auto py-20">
        <WelcomeHeader />
        <WelcomeIntro />
      </div>
    </main>
  );
}

export default IndexPage;
