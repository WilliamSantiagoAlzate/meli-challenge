import React, { Dispatch, useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import Spinner from '../UI/Spinner';
import ItemDetail from './ItemDetail';
import { itemsState, spinnerColors, params } from '../../types'
import { getItemById } from '../../redux/actions/items';

type DetailProps = {
  getItemById(id: string): void
  item: any,
  loadingItem: boolean
}

const Detail: React.FC<DetailProps> = ({
  getItemById,
  item,
  loadingItem
}) => {
  const params: params = useParams();
  
  useEffect(() => {
    getItemById(params.id);
  }, [getItemById, params])

  return (
    <>
      {loadingItem ? 
        <section className="spinner__container">
          <Spinner color={spinnerColors.black} /> 
        </section>
        :
        Object.keys(item).length > 0 &&
        <ItemDetail 
          image={item.picture}
          title={item.title}
          description={item.description}
          price={item.price.amount}
          currency={item.price.currency}
          condition={item.condition}
          free_shipping={item.free_shipping}
          sold_quantity={item.sold_quantity}
        />
      } 
    </>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getItemById(id: string) {
    dispatch(getItemById({ id }))
  }
});

const mapStateToProps = (state: itemsState) => ({
  item: state.item,
  loadingItem: state.loadingItem
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);