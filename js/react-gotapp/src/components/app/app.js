import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
    state = {
        visible: true
    }

    onHide = () => {
        this.setState((state) => {
            return {
                visible: !state.visible
            }
        })
    }

    render() {
        const char = this.state.visible ? <RandomChar/> : null;
        const textHideBtn = this.state.visible ? 'Hide Random Character Block' : 'Show Random Character Block';
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <button className="btn btn-danger hide-random-char-btn" onClick={this.onHide}>{textHideBtn}</button>
                            {char}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
};