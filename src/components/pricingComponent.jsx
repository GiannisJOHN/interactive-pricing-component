import React from 'react'

var viewsAndPrice = [
    {pageviews: '10K', pricePerMonth: 8},
    {pageviews: '50K', pricePerMonth: 12},
    {pageviews: '100K', pricePerMonth: 16},
    {pageviews: '500K', pricePerMonth: 24},
    {pageviews: '1M', pricePerMonth: 36}
]
class PricingComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            views: '100K',
            price: 16,
            discountActivated: false
        }
    }

    render() {
        console.log(process.env.PUBLIC_URL);
        return (
            <>  
                <div className="boxShadow">
                    <div className="pricingContainer">
                    <div className='rangeSliderContainer'>
                        <div>
                            <p>{this.state.views} PAGEVIEWS</p>
                        </div>
                        <div>
                            <h1>
                                $
                                {
                                    this.state.discountActivated === false ?
                                    this.state.price :
                                    (this.state.price / 100) * 75
                                }
                                <span>.00</span> 
                            </h1>
                            <p> / month</p>
                        </div>
                        <div>  
                            <input
                            className='rangeSlider'
                            type="range"
                            min="0"
                            max="100"
                            step="25"
                            onInput={(e) => {
                                var rangeValue = e.target.value
                                var nuViews
                                var nuPrice

                                if (rangeValue == 0) {
                                    nuViews = viewsAndPrice[0].pageviews
                                    nuPrice = viewsAndPrice[0].pricePerMonth
                                } else if (rangeValue == 25) {
                                    nuViews = viewsAndPrice[1].pageviews
                                    nuPrice = viewsAndPrice[1].pricePerMonth
                                } else if (rangeValue == 50) {
                                    nuViews = viewsAndPrice[2].pageviews
                                    nuPrice = viewsAndPrice[2].pricePerMonth
                                } else if (rangeValue == 75) {
                                    nuViews = viewsAndPrice[3].pageviews
                                    nuPrice = viewsAndPrice[3].pricePerMonth
                                } else if (rangeValue == 100) {
                                    nuViews = viewsAndPrice[4].pageviews
                                    nuPrice = viewsAndPrice[4].pricePerMonth
                                }
                                
                                this.setState({
                                    views: nuViews,
                                    price: nuPrice
                                })
                            }}
                            />
                        </div>
                    </div>      
                    <div className='toggleContainer'>
                            <p>Monthly Billing</p>
                            <button
                            onClick={() => {
                                this.setState({
                                    discountActivated: this.state.discountActivated === false ? true : false
                                })
                            }}                                                          
                            > <div style={this.state.discountActivated === false ? {transform: 'translateX(0)'} : {transform: 'translateX(21px)'}}></div> </button>
                            <p>Yearly Billing</p>
                            <div className='discountInfo'>
                                <p>25% discount</p>
                                <p>-25%</p>
                            </div>
                    </div>
                </div>
                    <div className='callToAction'>
                        <div>
                            <ul>
                                <li><span>&#10003;</span> Unlimited websites</li>
                                <li><span>&#10003;</span> 100% data ownership</li>
                                <li><span>&#10003;</span> Email reports</li>
                            </ul>
                        </div>
                        <div>
                            <button>
                                Start my trial
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PricingComponent