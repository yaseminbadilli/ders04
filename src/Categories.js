import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap'






class Categories extends React.Component {


    constructor(probs) {
        super(probs);
        this.state = {
            Categories: [

                { categoryId: 1, categoryName: "kovalar" },
                { categoryId: 2, categoryName: "tek tavuk" },
                { categoryId: 3, categoryName: "salata" },
                { categoryId: 4, categoryName: "sandiviç" },






            ],


        }

    }
    render() {

        return (<div>

            <h2>{this.props.info.title}</h2>

            <ListGroup>

                {this.state.Categories.map((category) => (
                    <ListGroupItem key={category.categoryId}>
                        {category.categoryName}
                    </ListGroupItem>
                ))}


            </ListGroup>

        </div>



        )
    }



}
export default Categories;