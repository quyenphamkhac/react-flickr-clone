import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../components/Header/Header';
import PhotoExplorer from '../components/PhotoExplorer/PhotoExplorer';

//reach router
import { Router, Redirect } from '@reach/router';

class MainApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container style={{ marginTop: '6em' }}>
                    <Router>
                        <Redirect from="/" to="/explorer" />
                        <PhotoExplorer path="/explorer" />
                    </Router>
                </Container>
            </div>
        );
    }
}

export default MainApp;