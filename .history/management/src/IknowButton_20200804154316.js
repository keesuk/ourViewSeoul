import React, { useState } from 'react';
import './IknowButton.css';
import './index.css';

class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        toggle: this.props.defaultState,
        clickAnimation: false
      };
      
      this.isClicked = this.isClicked.bind(this);
      this.animationDidFinish = this.animationDidFinish.bind(this);
      this.executeCallback = this.executeCallback.bind(this);
      this.toggleState = this.toggleState.bind(this);
    }
    
    componentDidMount() {
      //if animating button, addEventListener for when animation is finished, add animationDidFinish as the callback
      if (this.props.animate) {
        const button = this.refs.button
        button.addEventListener("animationend", this.animationDidFinish);
      }
    }
    
    componentDidUnmount() {
      const button = this.refs.button
      button.removeEventListener("animationend")
    }
    
    animationDidFinish() {
      //When animation is finished: execute callback, toggle button state, and set clickAnimation to false
      this.executeCallback();
      this.toggleState();
      this.setState({clickAnimation: false});
      
      return this.state.clickAnimation;
    }
    
    executeCallback() {
      //execute callback
      const currentState = this.state.toggle;
      const callback = this.props.callback(!currentState);
      
      return callback;
    }
    
    toggleState() {
      //toggle button state
      const currentState = this.state.toggle;
      this.setState({toggle: !currentState});
      
      return this.state.toggle;
    }
    
    isClicked() {
      //if animate is true, animate button otherwise run everything without setting clickAnimation
      if (this.props.animate) {
        this.setState({clickAnimation: true});
      } else {
        this.executeCallback();
        this.toggleState();
        this.setState({clickAnimation: false});
      }
      
      return this.state.clickAnimation;
    }
  
    render() {
      const toggle = this.state.toggle;
      const on = this.props.on;
      const off = this.props.off;
      const clickAnimationClassName = this.state.clickAnimation ? "bounce " : "";
      
      const classNames = "toggle-button " + (toggle ? "on " : "") + clickAnimationClassName;
      const buttonText = this.props.buttonText + (toggle ? " is " + on : " is " + off);
      
      return (
        <div ref="button" className={classNames} onClick={this.isClicked}>
          {buttonText}
        </div>
      );
    }
  }
  
  //ToggleButton props' type-checking
  ToggleButton.propTypes = {
    buttonText: React.PropTypes.string,
    defaultState: React.PropTypes.bool,
    on: React.PropTypes.string,
    off: React.PropTypes.string,
    animate: React.PropTypes.bool,
    callback: React.PropTypes.func
  }
  
  //ToggleButton default state and properties
  ToggleButton.defaultProps = {
    buttonText: "wifi",
    defaultState: false,
    on: "on",
    off: "off",
    animate: true,
    callback: function(componentState) {
      console.log("Toggle wifi:", componentState ? "on": "off");
    }
  }
  
  class ButtonGroup extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div>
          <ToggleButton />
          <ToggleButton 
            buttonText="react"
            on="wow"
            callback={function(componentState) {
              console.log("react:", componentState ? "wow": "off");
            }}
           />
          <ToggleButton 
            buttonText="js"
            defaultState={true}
            on="nice"
            off="not nice"
            animate={false}
            callback={function(componentState) {
              console.log("js:", componentState ? "nice": "not nice");
            }}
           />
        </div>
      );
    }
  }

export default ToggleButton