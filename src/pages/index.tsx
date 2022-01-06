import * as React from 'react';
import portrait from '../images/portrait.jpg';
import AboutInfo from '../content/about.json';
import Navbar from '../components/Navbar';

function WelcomeHeader() {
  return (
    <div className="h-fit flex flex-col md:flex-row pb-7">
      <div className="flex flex-row md:flex-col justify-center pb-7 pr-0 md:pr-7 md:pb-0">
        <img
          src={portrait}
          alt="Simon Hoque portrait"
          className="object-cover justify-self-center h-auto w-28 xl:w-36 rounded-full"
        />
      </div>
      <div className="h-auto flex flex-col justify-center">
        <p className="text-2xl md:text-4xl xl:text-6xl xxl:text-8xl font-bold">
          {AboutInfo.welcomeLine1}
        </p>
        <h1 className="text-2xl md:text-4xl xl:text-6xl xxl:text-8xl pb-1 font-bold">
          {AboutInfo.welcomeLine2}
        </h1>
        <h2 className="text-md xl:text-2xl xxl:4xl font-semibold">
          {AboutInfo.welcomeSubtext}
        </h2>
      </div>
    </div>
  );
}

function getIntro(): JSX.Element[] {
  const intro: JSX.Element[] = [];
  AboutInfo.intro.forEach((paragraph: string) => {
    intro.push(
      <p className="text-md md:text-lg xxl:text-xl mb-4">{paragraph}</p>
    );
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
      <div className="container mx-auto py-20 xl:pt-32 xl:pb-auto">
        <WelcomeHeader />
        <WelcomeIntro />
      </div>
    </main>
  );
}

export default IndexPage;
