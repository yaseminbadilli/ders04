import React from "react";
import { ListGroup, ListGroupItem, Card, CardImg } from 'reactstrap'


class Products extends React.Component {
    constructor(probs) {
        super(probs);
        this.state = {
            counter: 1
        }
    }

    render() {

        return (<div>

            <h2>{this.props.info.title}</h2>
            <h3>Ziyaretçi: {this.state.counter}</h3>


            <ListGroup>
                <ListGroupItem>tekli kova</ListGroupItem>
                <Card>
                    <CardImg src="https://www.pngitem.com/pimgs/m/73-732653_transparent-popeyes-png-chicken-bucket-popeyes-png-png.png"></CardImg>
                </Card>
                <ListGroupItem>ikili kova</ListGroupItem>
                <Card>
                    <CardImg src="https://www.pngitem.com/pimgs/m/73-732653_transparent-popeyes-png-chicken-bucket-popeyes-png-png.png"></CardImg>
                </Card>
                <ListGroupItem>üçlü kova</ListGroupItem>
                <Card>
                    <CardImg src="https://www.pngitem.com/pimgs/m/73-732653_transparent-popeyes-png-chicken-bucket-popeyes-png-png.png"></CardImg>
                </Card>
            </ListGroup>



        </div>


        )
    }
}
export default Products;