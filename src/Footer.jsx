import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          footerVisible: false
        }; 
        this.scrollEvent = this.scrollEvent.bind(this);
      }
    componentDidMount(){
        window.addEventListener('scroll', this.scrollEvent); 
    }
    componentWillMount(){
        window.addEventListener('scroll', this.scrollEvent); 
    }

    scrollEvent = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
        this.setState({
            footerVisible:true
        });
        } else {
        this.setState({
            footerVisible:false
        });
        }
    }
    render() {
        return (
            <div className="container-box">
                <div className="header-container" id="header">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
                <div className={`footer-container ${this.state.footerVisible === true ? 'enable' : 'disable'}`}>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
        );
    }
}

export default Footer;