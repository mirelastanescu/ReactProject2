import React from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartAction';
import { addToFavorite } from '../../redux/favorite/favoriteAction';
import { removeFromFavorite } from '../../redux/favorite/favoriteAction';
import FavoriteEmpty from '../../assets/icons/emptyheart.svg';
import FavoriteFull from '../../assets/icons/fullheart.svg';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        console.log(categoryValues);

        let currentProduct;

        categoryValues.forEach((category) => {
            const findResult = category.items.find((product) => {
                console.log(typeof productId, typeof product.id);
                return product.id === Number(productId);
            });
            if (findResult) {
                currentProduct = findResult;
            }
        });

        this.setState({product: currentProduct});
    }

    isProductInList(product){
        console.log("this.props.productsFav", this.props.productsFav)
        return this.props.productsFav.find((p) => p.id === product.id);
    }

    render() {
        const { product } = this.state;

        return (
            <Layout>
                <div className="product-page content-min-height container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>&nbsp;&nbsp;

                            <button
                                className="btn mb-4"
                                onClick={() => {
                                    !this.isProductInList(product)
                                    ? this.props.addToFavorite({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                    : this.props.removeFromFavorite({id: product.id})
                                }}
                            >
                            
                            <img src={this.isProductInList(product)?FavoriteFull:FavoriteEmpty} alt="Favorite"/>
                            </button>
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorite: (payload) => dispatch(addToFavorite(payload)),
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    }
}

function mapStateToProps(state) {
    return {
        productsFav: state.favorite.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);