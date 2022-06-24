import React from "react";
import { ListGroup, ListGroupItem, Card, CardImg } from 'reactstrap'
import './Categories.css'

class Products extends React.Component {
    constructor(probs) {
        super(probs);
        this.state = {

           Products : [

            ],
            
            counter: 1
        }
    }

    componentDidMount() {
        this.getProducts();
    }


    getProducts = () => {
        fetch("http://localhost:3000/products")
            .then(response=> response.json())
            .then(data=> this.setState({Products:data}));
    }

    render() {

        return (<div class="vertical-menu">
         <a href="#" class="active">{this.props.info.title}</a>
         

            <h3>Ziyaretçi: {this.state.counter}</h3>

            

            <a href="menüler">{this.state.Products.map((product) => (
                    <ListGroupItem key={product.productId}>
                        {product.productName}
                        <Card>
                            <CardImg src ={product.productImage}></CardImg>
                        </Card>
                    </ListGroupItem>
                ))}</a>



        </div>


        )
    }
}
export default Products;