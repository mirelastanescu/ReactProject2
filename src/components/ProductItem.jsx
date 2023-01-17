import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavorite } from '../redux/actions/favorite';
// Importam Link-ul din router.
import { Link } from 'react-router-dom';
import FavoriteEmpty from '../assets/icons/emptyheart.svg';
import FavoriteFull from '../assets/icons/fullheart.svg';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;

    return(
        // col + col-md !
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            {/* Adaugam un link catre pagina de produs, precum si stilizare. */}
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
            &nbsp;
            <button
                className="btn mb-4"
                onClick={() => props.addToFavorite({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
            <img src={FavoriteEmpty} alt="Favorite" border="0"/>
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorite: (product) => dispatch(addToFavorite(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);