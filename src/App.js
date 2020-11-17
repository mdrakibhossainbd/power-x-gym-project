import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HomeBody from './components/HomeBody/HomeBody';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SubHeader from './components/SubHeader/SubHeader';
import PriceBody from './components/PriceBody/PriceBody';


function App() {
  return (
    
      <Router>
        <Switch>

          <Route exact path='/'>
            <Navbar />
            <Header />
            <HomeBody />
            <Footer />
          </Route>
           {/* project */}

          <Route path='/class'>
            <Navbar />
            <SubHeader header='OUR CLASSES' />
            <Footer />
          </Route>


          <Route path='/details/:page'>
            <Navbar />
            <SubHeader header='' />
            {/* here we will add details about our courses */}
            <Footer />
          </Route>


          <Route path='/price'>
            <Navbar />
            <SubHeader header='PRICING PLANS' />
            <PriceBody />
            <br></br>
            <Footer />
          </Route>


          <Route path='/membership'>
            <Navbar />
            <SubHeader header='YOUR GYM MEMBERSHIP' />
             {/* here you will add booking table  */}
            <Footer />
          </Route>

          
          <Route path='*'>
            <PageNotFound />
          </Route>

        </Switch>
      </Router>
    
  );
}

export default App;
