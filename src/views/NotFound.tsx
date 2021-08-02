import { Link } from 'react-router-dom';

const NotFoundView: React.FC = () => (
  <main className="not-found">
    <section className="not-found__container">
      <h3 className="not-found__title">404</h3>
      <h5 className="not-found__description">Página no encontrada</h5>
      <Link className="not-found__button" to="/">Volver</Link>
    </section>
  </main>
);

export default NotFoundView;