import { Navbar, Welcome, Footer, Services, Transactions,Market } from './components';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
const App = () => {
  return (
    <Router basename={'/KryptoKnight'}>
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <div className='content'>
            <Switch>
              <Route  exact path={["/", "/home"]}>
                <Welcome />
                <Services />
                <Transactions />
              </Route>
              <Route exact path="/market">
                  <Market/>
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
