import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavorite } from '../redux/actions/favorite';
import { removeFromFavorite } from '../redux/actions/favorite';
// Importam Link-ul din router.
import { Link } from 'react-router-dom';
import FavoriteEmpty from '../assets/icons/emptyheart.svg';
import FavoriteFull from '../assets/icons/fullheart.svg';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }

    isProductInList(id){
        return this.props.productsFav.find((p) => p.id === id);
    }

    render() {
        const {name, price, currency, image, id} = this.props;

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
                    onClick={() => this.props.addToCart({
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
                    onClick={() => {
                        !this.isProductInList(id)
                        ? this.props.addToFavorite({
                            product: {
                                id,
                                name,
                                price,
                                currency,
                                image
                            }
                        })
                        : this.props.removeFromFavorite({id})
                    }}
                >
                <img src={this.isProductInList(id)?FavoriteFull:FavoriteEmpty} alt="Favorite"/>
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorite: (product) => dispatch(addToFavorite(product)),
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    };
}

function mapStateToProps(state) {
    console.log("state.favorite.products", state.favorite.products);
    return {
        productsFav: state.favorite.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
