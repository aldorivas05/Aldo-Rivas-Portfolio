import React from 'react';
import '../styles/global.css';
import { Header } from '../components/Header';
import { ProjectsContainer } from '../containers/ProjectsContainer';
import { FrontEndContainer } from '../containers/FrontendContainer';
import { Footer } from '../containers/Footer';
import { TechSkills } from '../components/TechSkills';


function App() {
  return (
    <>
      <Header />
      <FrontEndContainer />
      <TechSkills />
      <ProjectsContainer />
      <Footer />
    </>
  );
}

export default App;
