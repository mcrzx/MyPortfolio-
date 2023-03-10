import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';


const Home : NextPage = () => {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Maria's Portfolio</title>
      </Head>
      <Header/>
       {/* Hero */}
       <section id="hero" className='snap-start'>
       <Hero/>
       </section>
       <section id='about' className='snap-center'> <About/> </section>
       {/* Experience */}
       <section id='experience' className='snap-center'>
        <WorkExperience/>
       </section>
       {/* Skills*/}
       {/* Projects */}
       {/* Contact Me*/}
    </div>
  )
}

export default Home;
