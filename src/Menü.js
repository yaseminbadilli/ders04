import React from "react";

import { Nav, NavLink, NavItem } from 'reactstrap';

class Menü extends React.Component {


    constructor(probs) {
        super(probs)
    }
    render() {

        return (

            <Nav>
                <NavItem>
                    <NavLink>
                        {this.props.info.menü1}
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink>
                        {this.props.info.menü2}
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink>
                        {this.props.info.menü3}
                    </NavLink>
                </NavItem>
            </Nav>



        )
    }
}

export default Menü;