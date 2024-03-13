import                React  from 'react';
import { Provider }           from 'react-redux';
import store                  from '../store/store';
import { Header }            from '../components/Header';
import { ProjectsContainer } from '../containers/ProjectsContainer';
import { FrontEndContainer } from '../containers/FrontendContainer';
import { Footer }             from '../containers/Footer';
import '../styles/global.css';

function App () {
  return (
    <Provider store={store}>
      <Header />
      <FrontEndContainer />
      <ProjectsContainer />
      <Footer />
    </Provider>
  );
}

export default App;
