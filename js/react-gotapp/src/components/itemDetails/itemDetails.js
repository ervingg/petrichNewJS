import React, { Component } from 'react';
import './itemDetails.css';
import gotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    .select-error {
        color: #000;
    }
`;

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};

export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null,
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    updateItem() {
        const {itemId} = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        if (this.props.item === 'char') {
            this.gotService.getCharacter(itemId)
                .then(this.onItemDetailsLoaded)
                .catch(() => this.onError())
        } else if (this.props.item === 'book') {
           this.gotService.getBook(itemId)
                .then(this.onItemDetailsLoaded)
                .catch(() => this.onError()) 
        } else {
            this.gotService.getHouse(itemId)
                .then(this.onItemDetailsLoaded)
                .catch(() => this.onError())
        }
    }


    onError() {
        this.setState({
            item: null,
            error: true
        })
    }


    render() {

        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.item) {
            return (
                <ItemDetailsBlock className="rounded">
                    <span className="select-error">Please select a item</span>
                </ItemDetailsBlock>
            ) 
        }

        const {item} = this.state;
        const {name} = item;

        if (this.state.loading) {
            return (
                <ItemDetailsBlock className="rounded">
                    <Spinner/>
                </ItemDetailsBlock>
            )
        }

        return (
            <ItemDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </ItemDetailsBlock>
        );
    }
}