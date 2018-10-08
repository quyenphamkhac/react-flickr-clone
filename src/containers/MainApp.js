import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../components/Header/Header';
import PhotoExplorer from '../components/PhotoExplorer/PhotoExplorer';
import PhotoSearch from '../components/PhotoSearch/PhotoSearch';
import PhotoReview from '../components/PhotoReview/PhotoReview';

//reach router
import { Router } from '@reach/router';

class MainApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container style={{ marginTop: '6em' }}>
                    <Router>
                        <PhotoExplorer path="/" />
                        <PhotoSearch path="/search" />
                        <PhotoReview path="/photo/:photoId" />
                    </Router>
                </Container>
            </div>
        );
    }
}

export default MainApp;