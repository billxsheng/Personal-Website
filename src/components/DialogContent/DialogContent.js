import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './DialogContent.css';
import MainButtonNav from '../Button/MainButtonRow/MainButtonRow';
import contact from '../../assets/contact';

class Modal extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div styleName="modal">
        <h1>{contact.title}</h1>
          <div>
            <p styleName="contact-p" >
              {contact.search}
            </p>
            <hr styleName="hr"></hr>
            <MainButtonNav/>
            <div className="row" styleName="btn-close"> 
              {this.props.children}
            </div>
        </div>
      </div>
    )
  }
} 


export default CSSModules(Modal, styles);