import React from "react";
import { Container, Row, Col } from 'reactstrap'
import Nav from './Nav.js';
import Categories from "./Categories.js";
import Products from "./Products.js";
import Menü from "./Menü.js";
import Footer from "./Footer.js";

class App extends React.Component {

    render() {
        let infoMenü = { menü1: "ANASAYFA", menü2: "HAKKIMIZDA", menü3: "İLETİŞİM" };
        let infoFooter = { info1: "YASEMİN", info2: "SANLIURFA" };
        let infoCategories = { title: "ÜRÜNLER" }
        let infoProducts = { title: "KOVALAR" }

        return (



            <div className="App">

                <Container>
                    <Row>
                        <Menü info={infoMenü} />
                    </Row>
                   
                    <Row>
                        <Nav />
                    </Row>

                    <Row>

                        <Col xs="4">
                            <Categories info={infoCategories} />

                        </Col>

                        <Col xs="8">
                            <Products info={infoProducts} />

                        </Col>

                    </Row>

                    <Row>
                        <Footer info={infoFooter} />
                    </Row>






                </Container>

            </div>
        )
    }
}
export default App;