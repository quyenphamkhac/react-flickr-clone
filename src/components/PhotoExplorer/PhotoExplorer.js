import React, { Component } from 'react';

import { Header, Icon, Divider } from 'semantic-ui-react';
import axios from 'axios';

import Photos from '../Photos/Photos';

import Waypoint from 'react-waypoint';


//api config
import { baseUrl, methods, apiKey } from '../../api/api';

const config = {
    per_page: 20,
}

class PhotoExplorer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            page: 1,
            pages: 100,
            isLoading: false,
        }
    }

    componentDidMount() {
        const { page } = this.state;
        this.setState({ isLoading: true });
        axios.get(`${baseUrl}?api_key=${apiKey}&method=${methods.FLICKR_INTERESTING}&format=json&nojsoncallback=1&&per_page=${config.per_page}&page=${page}`)
            .then(response => {
                if(response.status === 200 && response.data) {
                    const { photo, pages } = response.data.photos;
                    this.setState({ photos: photo, pages: pages, isLoading: false });
                }
            })
            .catch(error => {
                //error hanler
            });
    }

    loadMoreHandler = () => {
        let { page } = this.state;
        this.setState({ isLoading: true });
        axios.get(`${baseUrl}?api_key=${apiKey}&method=${methods.FLICKR_INTERESTING}&format=json&nojsoncallback=1&&per_page=${config.per_page}&page=${page+1}`)
            .then(response => {
                if(response.status === 200 && response.data) {
                    const { photo } = response.data.photos;
                    const { photos } = this.state;
                    this.setState({ photos: [...photos, ...photo], page: page + 1, isLoading: false });
                }
            })
            .catch(error => {
                //error hanler
            });
    }

    _renderWaypoint = (page) => {
        const { pages } = this.state;
        if(page < pages) {
            return <Waypoint onEnter={this.loadMoreHandler} bottomOffset={-162} />;
        }
        return null;
    }

    render() {
        const { photos, page } = this.state;
        return (
            <React.Fragment>
                <Header as='h2' icon>
                    <Icon name='wpexplorer'/>
                    Flickr Explorer
                    <Header.Subheader>Explore all interesting photos in the world.</Header.Subheader>
                </Header>
                <Divider />
                <Photos photos={photos}/>
                {this._renderWaypoint(page)}
            </React.Fragment>
        );
    }
}

export default PhotoExplorer;