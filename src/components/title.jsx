import React from 'react'
import circles from '../images/circles.svg'
class Title extends React.Component {

    constructor() {
        super()
        this.state = {
            init: true
        }
    }



    render() {
        return (
            <>
                <div className="titleContainer">
                    <h1>Simple, traffic-based pricing</h1>
                    <h2>Sign-up for our 30-day trial. No credit card required.</h2>
                    <div className="circlesContainer">
                        <img src={circles} alt="" />
                    </div>
                </div>
            </>
        )
    }
}

export default Title