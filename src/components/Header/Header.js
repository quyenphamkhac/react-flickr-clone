import React, { Component } from 'react';
import {
    Menu,
    Image,
    Container
} from 'semantic-ui-react';

import logo from '../../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            Flickr
                        </Menu.Item>
                        <Menu.Item as='a'>Explorer</Menu.Item>
                        <Menu.Item as='a'>Search</Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }
}

export default Header;