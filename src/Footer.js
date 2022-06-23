import React from "react";

class Footer extends React.Component {
    constructor(probs) {
        super(probs)
    }
    render() {

        return (


            <div>{this.props.info.info1}-{this.props.info.info2}</div>
        )


    }
}

export default Footer;