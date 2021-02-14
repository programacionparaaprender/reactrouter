import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, 
    NavbarToggler, 
    //NavItem, 
    NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">ReactRedux</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavLink exact  class="nav-item nav-link" to="/">
                                    Home
                                </NavLink>
                                <NavLink exact  class="nav-item nav-link" to="/googlemaps">
                                    Google maps
                                </NavLink>
                                <NavLink exact  class="nav-item nav-link" to="/vieja">
                                    Vieja
                                </NavLink>
                                <NavLink class="nav-item nav-link" to="/users">
                                    Users
                                </NavLink>
                                <NavLink class="nav-item nav-link" to="/contact">
                                    Contact
                                </NavLink>
                                <NavLink class="nav-item nav-link" to="/counter">
                                    Counter Redux
                                </NavLink>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
