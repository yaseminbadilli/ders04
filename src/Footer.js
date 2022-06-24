import React from "react";
import './Menü.css'


class Footer extends React.Component {
    constructor(probs) {
        super(probs)
    }
    render() {

        return (


            <div class="topnav">
            <a href="#isim">{this.props.info.info1}</a>
            <a href="#sehir">{this.props.info.info2}</a>
           

          </div>
        )


    }
}

export default Footer;