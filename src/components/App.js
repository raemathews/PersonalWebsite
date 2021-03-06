import './App.css';
import ResponsiveNav from './navigation/ResponsiveNav';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Switch, Route } from 'react-router-dom';

import Home from './IndexPage/Home';
import Contact from './ContactPage/Contact';
import Resume from './ResumePage/Resume';
import PageLoader from './PageLoader';
import Lorikeet from './ArtPage/Lorikeet';
import Portrait from './ArtPage/Portrait';
import Cezanne from './ArtPage/Cezanne';
import Error from './Error';
import Projects from './Projects/Projects';


const navList = [
  { name: "home", path: '/' },
  {name: "projects", path: '/projects'},
  /*{ name: "art", path: '/art' },*/
  { name: "resume", path: '/resume' },
  /*{ name: "loading tester", path: '/test' },*/
  { name: "contact me", path: '/contact' }

];

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {ResponsiveNav(navList)}
          <div className="page">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/test" component={PageLoader} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects/art-lorikeet" component={Lorikeet} />
              <Route path="/projects/art-self-portrait" component={Portrait} />
              <Route path="/projects/art/cezanne" component={Cezanne} />
              <Route component={Error} />
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
