import React from 'react';
import HATS_DATA from './hats.data';

import CollectionPreview from '/home/aneesh/Desktop/ecomm/crwn-app/src/components /preview-collection /preview-collection.component.jsx'

class HatsPage extends React.Component {
    constructor(props){
    super();
    this.state = {
        collections : HATS_DATA
    };
    }
    render() {
        return(
            <div className = 'hats-page'>
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) => 
                    <CollectionPreview key={id} {...otherCollectionProps}/> 
                )
                }
            </div>
        )
    }
}

export default HatsPage;