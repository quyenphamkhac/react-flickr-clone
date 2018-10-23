import React, { Component } from 'react';
import { Header, Icon, Divider, Form } from 'semantic-ui-react';

//redux action creators
import { searchByTag, clearSearch } from '../../redux/modules/search';

//redux connector
import { connect } from 'react-redux';

import Photos from '../Photos/Photos';

class PhotoSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }
    }

    searchChangeHandler = (e) => {
        this.setState({ search: e.target.value });
    }

    searchFormSubmitHandler = () => {
        const { search } = this.state;
        if(search) {
            this.props.searchByTag(search);
        } else {
            this.props.clearSearch();
        }
    }

    render() {
        const { search } = this.state;
        const { photos } = this.props;
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

const mapStateToProps = (state) => {
  return {
    photos: state.search.searchByTag,
  }
}

const mapDispatchToProps = {
  searchByTag,
  clearSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoSearch);