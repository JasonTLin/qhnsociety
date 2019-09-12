import React, {Component} from 'react';
import './NavBar.css';
import Logo from './icon.PNG';

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            iconWidth: "80px"
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(window.scrollY === 0){
            this.setState({
                iconWidth: "80px"
            })
        } else {
            this.setState({
                iconWidth: "60px"
            })
        }
    }

    render(){
        return(
        <div>
        <nav className="navbar navbar-light fixed-top bg-transparent navbar-expand-sm">
        <a className="navbar-brand">
            <img className="logo" src={Logo} width={this.state.iconWidth}/>
        </a>

        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Map</a>
                </li>
            </ul>
        </div>
        </nav>
        </div>
        )
    }
}
export default NavBar;