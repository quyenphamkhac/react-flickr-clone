import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import { Redirect } from '@reach/router';

class PhotoReview extends Component {
    render() {
        const { location } = this.props;
        const photo = location.state;
        let imageRender = null;
        if(photo) {
            const photoSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            imageRender = <Image fluid src={photoSrc} />
        } else {
            imageRender = <Redirect to="/" />
        }
        
        return (
            <div>
                {imageRender}
            </div>
        );
    }
}

export default PhotoReview;