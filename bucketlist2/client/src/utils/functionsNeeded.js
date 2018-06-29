import React, { Component } from 'react';
import API from '../utils/API';

export default class BucketList extends Component {
    state = {
        place: '',
        keyword: '',
        result: {},
        listItems: [],
        title: ''
    };

    componentDidMount() {
        this.loadList();
    }

    loadList = () => {
        API.getList()
            .then(res => this.setState({ listItems: res.data }))
            .catch(err => console.log(err)); 
    };

    deleteItem = id => {
        API.deleteItem(id)
            .then(res => this.loadBooks())
            .catch(err = console.log(err));
    };

    handleNewItemSubmit = event => {
        event.preventDefault();
        if (...) {
            API.saveItem({
                title: this.state.title
            })
                .then(res => this.loadList())
                .catch(err => console.log(err));
        }
    };

    handleItemClick = placeID => {
        Api.saveItem({
            title: this.state.result.results[placeID].name
        })
            .then(res => this.loadList())
            .catch(err => console.log(err));
    };

    searchPlace = (place, keyword) => {
        API.search(place)
            .then((res) => {
                let lat = res.candidates.geometry.location.lat;
                let lng = res.candidates.geometry.location.lng;
                API.placeDetails(lat, lng, keyword)
                    .then(result => this.setState({ result: res.results }))
                    .catch(err => console.log(err));
            }).catch(err => console.log(err));
    };

    handlePlaceSubmit = event => {
        event.preventDefault();
        this.searchPlace(this.state.place, this.state.keyword);
    };
  
    render() {
        return (
            <div>
        
            </div>
        )
    }
}
