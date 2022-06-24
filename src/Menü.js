import React from "react";
import './Menü.css'

import { Nav, NavLink, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'




class Menü extends React.Component {


    constructor(probs) {
        super(probs)
    }
    render() {

        return (




            <div class="topnav">
                <a href="#anasayfa">{this.props.info.menü1}</a>
                <a href="#hakkımızda">{this.props.info.menü2}</a>
                <a href="#iletişim">{this.props.info.menü3}</a>
            </div>





        )
    }
}

export default Menü;