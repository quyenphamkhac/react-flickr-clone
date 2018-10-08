import React, { Component } from 'react';

import { Link } from "@reach/router";

class Photos extends Component {
    render() {
        const { photos } = this.props;

        const photoNodes = photos.map(photo => {
            let id = photo.id;
            let source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

            let title = `${photo.title}`;

            return (
                <Link key={id} state={photo} to={`/photo/${id}`} target="_blank">
                    <div className="imageBox">
                        <img src={source} alt={title} className="photoImage"/>
                        <div className="titleOverlay">
                            {title}
                        </div>
                    </div>
                </Link>
            );
        });

        return (
            <div className="photoList">
                {photoNodes}
            </div>
        );
    }
}

export default Photos;