import React, { Component } from 'react';
import Palette from './Palette'
import PaletteList from './PaletteList'
import { Route, Switch } from 'react-router-dom'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.findPalette = this.findPalette.bind(this)
  }

  findPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route
          exact path='/'
          render={() => <PaletteList palettes={seedColors} />} />
        <Route
          exact path='/palette/:id'
          render={
            (routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[0])} />
      // </div>
    );
  }
}

export default App;
