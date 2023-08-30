import React, { Component } from 'react'

export default class FooterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <footer className="footer">
            <span className="text-primary">@All rights reversed 2023 @ReactFullStack</span>    
        </footer>        
      </div>
    )
  }
}
