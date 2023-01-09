import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Hello I am Katharina. I am a full stack developer. I recently
              found my true calling as a developer after a career as a project
              coordinator. I am passionate about JavaScript and seek a deeper
              understanding of programming languages. At the same time I want to
              provide a good user experience. It is important to me that my work
              has meaning and improves peoples' lives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
