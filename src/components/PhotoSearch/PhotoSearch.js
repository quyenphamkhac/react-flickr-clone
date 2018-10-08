import React, { Component } from 'react';
import { Header, Icon, Divider, Form } from 'semantic-ui-react';
import axios from 'axios';

//api config
import { baseUrl, methods, apiKey } from '../../api/api';

import Photos from '../Photos/Photos';


class PhotoSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            search: '',
        }
    }

    searchChangeHandler = (e) => {
        this.setState({ search: e.target.value });
    }

    searchFormSubmitHandler = () => {
        const { search } = this.state;

        if(search) {
            axios.get(`${baseUrl}?api_key=${apiKey}&method=${methods.FLICKR_SEARCH}&format=json&nojsoncallback=1&&per_page=50&page=1&text=${search}`)
                .then(response => {
                    if(response.status === 200 && response.data) {
                        const { photo } = response.data.photos;
                        this.setState({ photos: photo });
                    }
                })
                .catch(error => {
                    //error hanler
                });
        } else {
            this.setState({ photos: [] });
        }
    }

    render() {
        const { photos, search } = this.state;
        return (
            <React.Fragment>
                <Header as='h2' icon>
                    <Icon name='find'/>
                    Flickr Search
                    <Header.Subheader>Search all interesting photos in the world.</Header.Subheader>
                </Header>

                <div>
                    <Form onSubmit={this.searchFormSubmitHandler}>
                        <Form.Input
                            fluid
                            value={search}
                            icon={<Icon name='search' inverted circular link />} 
                            placeholder='Search...'
                            onChange={this.searchChangeHandler}
                        />
                    </Form>
                </div>
                
                <Divider />
                {photos.length === 0 && <Header>No photo found.</Header>}
                <Photos photos={photos}/>
            </React.Fragment>
        );
    }
}

export default PhotoSearch;