import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BuildBurger from './containers/BurgerBuilder/BurgerBuilder'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
