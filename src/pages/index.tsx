import React from 'react';
import portrait from '../images/portrait.jpg';
import Layout from '../components/layout';
import WelcomeIntro from '../components/welcome-intro';

interface WelcomeHeaderProps {
  welcomeLine1: string;
  welcomeLine2: string;
  welcomeSubtext: string;
}

function WelcomeHeader(props: WelcomeHeaderProps) {
  const { welcomeLine1, welcomeLine2, welcomeSubtext } = props;
  return (
    <div className="h-fit flex flex-col md:flex-row pb-7">
      <div className="flex flex-row md:flex-col justify-center pb-7 pr-0 md:pr-7 md:pb-0">
        <img
          src={portrait}
          alt="Simon Hoque portrait"
          className="object-cover justify-self-center h-auto w-28 md:w-36 rounded-full translate ease-in-out"
        />
      </div>
      <div className="h-auto flex flex-col justify-center">
        <p className="text-3xl md:text-5xl font-bold">{welcomeLine1}</p>
        <h1 className="text-3xl md:text-5xl pb-1 font-bold">{welcomeLine2}</h1>
        <h2 className="text-md md:text-2xl text-slate-400 font-semibold">
          {welcomeSubtext}
        </h2>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <Layout>
      <WelcomeHeader
        welcomeLine1="Hi,"
        welcomeLine2="I'm Simon Hoque."
        welcomeSubtext="Software Engineer @ Amazon"
      />
      <WelcomeIntro />
    </Layout>
  );
}
