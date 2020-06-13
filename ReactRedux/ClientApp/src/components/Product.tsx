import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';

//import * as CounterStore from '../store/Counter';
import * as ProductStore from '../store/Product';
import {Producto} from '../types'

type ProductProps =
ProductStore.ProductState &
    typeof ProductStore.actionCreators &
    RouteComponentProps<{}>;



class Product extends React.PureComponent<ProductProps> {
    public render() {
        let product:Producto //Product.ProductState.;
        product = {
            id: '1',
            name: 'Product 1',
            description:'Description product 1',
            price: 20.00
        }
        return (
            <React.Fragment>
                <h1>Product</h1>

                <p>This is a simple example of a React component.</p>
                {this.props.products.map((forecast: Producto) =>
                    <tr key={forecast.name}>
                    <td>{forecast.description}</td>
                    </tr>
                )} 
                {<p aria-live="polite">Current products: <strong>{JSON.stringify(this.props.products)}</strong></p> }
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button"
                        className="btn btn-primary btn-lg"
                        onClick={() => { this.props.addToCart(product); }}>
                        addToCard
                    </button>
                </div>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.products,
    ProductStore.actionCreators
)(Product as any);
