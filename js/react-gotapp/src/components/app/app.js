import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService';

export default class App extends Component {

    gotService = new gotService();

    state = {
        visible: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
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

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <button 
                                className="btn btn-danger hide-random-char-btn" 
                                onClick={this.onHide}>
                                    {textHideBtn}
                            </button>
                            {char}
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        )
    }
};