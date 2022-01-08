import * as React from 'react';
import portrait from '../images/portrait.jpg';
import Layout from '../components/Layout';
import WelcomeIntro from '../components/WelcomeIntro';
import HomepageCard from '../components/HomepageCard';

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
          className="object-cover justify-self-center h-auto w-28 xl:w-36 rounded-full"
        />
      </div>
      <div className="h-auto flex flex-col justify-center">
        <p className="text-2xl md:text-4xl font-bold">{welcomeLine1}</p>
        <h1 className="text-2xl md:text-4xl pb-1 font-bold">{welcomeLine2}</h1>
        <h2 className="text-md md:text-2xl font-semibold">{welcomeSubtext}</h2>
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
      <h2 className="text-xl md:text-2xl font-semibold mt-12">
        Select Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-4 pt-7">
        <HomepageCard
          headerContent="Personal Website v2"
          bodyContent="The one you're looking at right now!"
          footerContent="React, Gatsby and Tailwind CSS"
        />
        <HomepageCard
          headerContent="Personal Website v2"
          bodyContent="The one you're looking at right now!"
          footerContent="React, Gatsby and Tailwind CSS"
        />
        <HomepageCard
          headerContent="Personal Website v2"
          bodyContent="The one you're looking at right now!"
          footerContent="React, Gatsby and Tailwind CSS"
        />
      </div>
    </Layout>
  );
}
