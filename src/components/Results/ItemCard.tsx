import React from 'react';
import { Link } from "react-router-dom";
import { currencyFormatter } from '../../helpers/currencyFormatter';

type ItemCardProps = {
  id: number
  price: number
  currency: string
  title: string
  image: string
  condition: string
  free_shipping: boolean
}

const ItemCard: React.FC<ItemCardProps> = ({
  id, 
  price, 
  currency,
  title,
  image, 
  condition, 
  free_shipping 
}) => (
  <article className="item-card">
    <aside className="item-card__aside">
      <Link to={`/items/${id}`}>
        <img 
          src={image} 
          alt={`Foto de ${title}`} 
          className="item-card__image" 
        />
      </Link>
    </aside>
    <main className="item-card__main">
      <h5 className="item-card__price">
        {`${currencyFormatter(price)} ${currency}`}
        {free_shipping &&
          <img 
            src="https://i.ibb.co/QfRsn61/car-icon.png" 
            alt="Un carro de despacho"
            className="item-card__shipping" 
          />
        }
      </h5>
      <p className="item-card__title">{title}</p>
      <p className="item-card__description">{condition === 'new' ? 'Nuevo' : 'Usado'}</p>
    </main>
  </article>
)

export default ItemCard;