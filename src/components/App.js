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
import {Lorikeet} from './Projects/Lorikeet';
import {Cezanne} from './Projects/Cezanne';
import Error from './Error';
import Projects from './Projects/Projects';
import Hackbeanpot2021 from './Projects/hackbeanpot2021';
import {Portrait} from './Projects/SelfPortrait';
import {Portraits} from './Projects/PortraitPhotography';

const navList = [
  { name: "home", path: '/' },
  {name: "projects", path: '/projects'},
  { name: "resume", path: '/resume' },
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
              <Route path="/lorikeet" component={Lorikeet} />
              <Route path="/self-portrait" component={Portrait} />
              <Route path="/cezanne" component={Cezanne} />
              <Route path="/hackbeanpot2021" component={Hackbeanpot2021} />
              <Route path="/portrait-photography" component={Portraits} />
              <Route component={Error} />
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
