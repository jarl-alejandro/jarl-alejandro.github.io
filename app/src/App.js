import React, {
  Component,
  Fragment
} from 'react'
import MenuAside from './components/MenuAside'

import './App.css'

class App extends Component {
  render() {
    return (
      <section className='JarlApp'>
        <MenuAside />
        <main className='MainContainer'>
          Main
        </main>
      </section>
    )
  }
}

export default App;
