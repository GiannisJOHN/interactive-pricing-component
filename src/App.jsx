import React from 'react'
import Title from './components/title.jsx'
import PricingComponent from './components/pricingComponent.jsx'

class App extends React.Component {

  render() {
    return (
      <>
      <main>
        <Title />
        <PricingComponent />
        <div className="topBackground"></div>
      </main>
      </>
    )

  }
}

export default App
