import React from "react";
import { currencyFormatter } from '../../helpers/currencyFormatter';

type ItemDetailProps = {
  image: string
  title: string
  description: string
  price: number
  currency: string
  condition: string
  free_shipping: boolean
  sold_quantity: number
}

const ItemDetail: React.FC<ItemDetailProps> = ({
  image,
  title,
  description,
  price,
  currency,
  condition,
  free_shipping,
  sold_quantity,
}) => (
  <section className="item-detail">
    <section>
      <img 
        src={image} 
        alt={`Foto de ${title}`}
        className="item-detail__image"
      />
    </section>
    <section>
      <p className="item-detail__condition">
        {condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity} vendidos
        {free_shipping &&
          <img 
            src="https://i.ibb.co/QfRsn61/car-icon.png" 
            alt="Un carro de despacho"
            className="item-card__shipping" 
          />
        }
      </p>
      <h4 className="item-detail__title">{title}</h4>
      <h5 className="item-detail__price">
        {`${currencyFormatter(price)} ${currency}`}
      </h5>
      <button className="item-detail__button">
        Comprar
      </button>
    </section>
    <section>
      <h5 className="item-detail__description-title">
        Descripción del producto
      </h5>
      <p className="item-detail__description">
        {description}
      </p>
    </section>
  </section>
);

export default ItemDetail;