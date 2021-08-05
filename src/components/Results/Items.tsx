import React from 'react';
import { connect } from "react-redux";
import ItemCard from './ItemCard';
import Spinner from '../UI/Spinner';
import { itemsState, spinnerColors } from '../../types'

type ItemsProps = {
  items?: any[]
  loadingItems?: boolean
}

const Items: React.FC<ItemsProps> = ({
  items,
  loadingItems 
}) => (
  <>
    {loadingItems ? 
      <section className="spinner__container">
        <Spinner color={spinnerColors.black} /> 
      </section>
      : 
      <section className="items">
        {items?.map(item =>
          <ItemCard
            key={item.id}
            id={item.id} 
            title={item.title}
            image={item.picture}
            price={item.price.amount}
            currency={item.price.currency}
            condition={item.condition}
            free_shipping={item.free_shipping} 
          />
        )}
      </section>
    }
  </>
);

const mapStateToProps = (state: itemsState) => ({
  items: state.items,
  loadingItems: state.loadingItems
});

export default connect(mapStateToProps, null)(Items);