import React, { Component } from 'react';
import Palette from './Palette'
import { Route, Switch } from 'react-router-dom'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palettes goes here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Individual palette</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[0])} />
      // </div>
    );
  }
}

export default App;
