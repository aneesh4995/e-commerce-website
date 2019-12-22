import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '/home/aneesh/Desktop/ecomm/crwn-app/src/components /preview-collection /preview-collection.component.jsx'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        return (
            <div className= 'shop-page'>
            <h1>Collections</h1>
        {
            this.state.collections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/> 
                ))
            }
       </div>
   )
 }
}


export default ShopPage;