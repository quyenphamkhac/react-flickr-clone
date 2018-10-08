import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../components/Header/Header';

class MainApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container text style={{ marginTop: '6em' }}>
                    abc
                </Container>
            </div>
        );
    }
}

export default MainApp;