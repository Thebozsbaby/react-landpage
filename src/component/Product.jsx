import React from 'react'
import "../styles/product.css"

const Product = () => {
  return (
    <product>
        <div>
            <h1>Everything you need, less of what you don't.</h1>
            <div className='lisst'>
                <a href="">
                    <h6>Payments</h6>
                    <p>Create instant, scheduled and recurring payments easily</p>
                </a>
                <a href="">
                    <h6>Invoices</h6>
                    <p>Send, receive, and reconcile invoices all on one platform</p>
                </a>
                <a href="">
                    <h6>Cashflow Support</h6>
                    <p>Move your business forward with insight and financial resources</p>
                </a>
                <a href="">
                    <h6>Cross-platform availability</h6>
                    <p>Bank everywhere. Available on iOS, Android and Slack</p>
                </a>
                <a href="">
                    <h6>Team banking</h6>
                    <p>Work with your team to run your entire financial operations</p>
                </a>
            </div>
        </div>
        <div className='vid'>
            <video src="https://www.trybrass.com/static/Payments-8fb7dc6bc3585e4167c7fde6ed0c3db7.mp4"  autoPlay muted></video>
        </div>
    </product>
  )
}

export default Product