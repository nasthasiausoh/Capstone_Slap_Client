import React, { Component } from 'react'
import './HeroImageStyles.css'

export class HeroImage extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
            <h1 id='about-us-heading' >{this.props.heading}</h1>
            <p id='about-us-text' >{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImage