import React from 'react';
//import SHOP_DATA from './shop.data';
import CollectionsOverview from '../../components /collections-overview/collection-overview.componet';


const ShopPage = ({ collections }) => (
        <div className= 'shop-page'>
          <CollectionsOverview/>
       </div>
   )
export default ShopPage;