import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
  gotService = new gotService();

  state = {
    selectedHouse: null,
    error: false
  }

  componentDidCatch() {
    this.setState({
        error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
        selectedHouse: id
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        page='3'
        getData={this.gotService.getAllHouses}
        renderItem={({name, region}) => `${name} (${region})`}/>
    )

    const HouseDetails = (
      <ItemDetails 
        itemId={this.state.selectedHouse}
        item='House'>
        <Field field='region' label='Region'/>
        <Field field='words' label='Words'/>
        <Field field='titles' label='Titles'/>
        <Field field='ancestralWeapons' label='Ancestral Weapons'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={HouseDetails}/>
    )
  }
}