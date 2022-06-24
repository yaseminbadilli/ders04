import React from "react";
import './Categories.css'
import { ListGroup, ListGroupItem } from 'reactstrap'






class Categories extends React.Component {


    constructor(probs) {
        super(probs);
        this.state = {
            Categories: [
            ],


        }

    }
    
    componentDidMount() {
        this.getCategories();
    }


    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response=> response.json())
            .then(data=> this.setState({Categories:data}));
    }

    render() {

        return (<div class="vertical-menu">
            
            <a href="baslik" class="active">{this.props.info.title}</a>

            <a href="menüler">{this.state.Categories.map((category) => (
                    <ListGroupItem key={category.categoryId}>
                        {category.categoryName}
                    </ListGroupItem>
                ))}</a>

            

        </div>



        )
    }



}
export default Categories;