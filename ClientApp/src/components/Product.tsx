import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';

//import * as CounterStore from '../store/Counter';
import * as ProductStore from '../store/Product';
import {Producto,ProductoClass} from '../types'

type ProductProps =
ProductStore.ProductState &
    typeof ProductStore.actionCreators &
    RouteComponentProps<{}>;


//Producto colocarlo en el extends para que funcione todo
class Product extends React.PureComponent<ProductProps, Producto> {
    /* public state: Producto = {
        id: '1',
        name: 'Product 1',
        description:'Description product 1',
        price: 20.00
    };  */
    constructor(props: any) {
        super(props);
        
        this.state = {
            id: '1',
            name: 'Product 1',
            description:'Description product 1',
            price: 20.00
        }
        this.handleChange1 = this.handleChange1.bind(this);
    } 
    handleChange1(e:any) {
        /* var obj[e.target.name] = e.target.value
        this.setState(obj); */
        //console.log(e.target.value);
        this.setState({ id: String(e.target.value) });
        //this.state.id = e.target.value;
    }
    public render() {
        var product:ProductoClass = new ProductoClass();  //Product.ProductState.;
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
        /* product = {
            id: '1',
            name: 'Product 1',
            description:'Description product 1',
            price: 20.00
        } */
        /* this.state = {
            product: product
        } */
        return (
            <React.Fragment>
                <h1>
                    Ejemplo de productos usando estados persistentes.
                </h1>
                <form>
                    <div className="form-group">
                        <label>Código producto:</label>
                        <input 
                            onChange={this.handleChange1}
                            value={this.state.id} 
                            type="number" 
                            id="Iid" 
                            name="id" 
                            placeholder="Ingrese código" 
                            className="form-control" />
                    
                    </div>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" id="Inombre" name="nombre" placeholder="Ingrese nombre" className="form-control" />
                    
                    </div>
                    <div className="form-group">
                        <label>Descripcion:</label>
                        <input type="text" id="Idescripcion" name="descripcion" placeholder="Ingrese descripcion" className="form-control" />
                    
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                            className="btn btn-primary btn-lg"
                            onClick={() => { this.props.addToCart(product); }}>
                            addToCard
                        </button>
                        <button type="button"
                            className="btn btn-success">
                            Editar
                        </button>
                        <button type="reset"
                            className="btn btn-warning btn-lg">
                            Reset
                        </button>
                        <button type="button"
                            className="btn btn-danger btn-lg">
                            Salir
                        </button>
                    </div>
                </form>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {this.props.products.map((forecast: Producto) =>
                    <tr key={forecast.id}>
                        <td>{forecast.id}</td>
                        <td>{forecast.name}</td>
                        <td>{forecast.description}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button"
                                    className="btn btn-success">
                                    Editar
                                </button>
                                <button type="button"
                                    onClick={() => { this.props.deleteProduct(forecast.id); }}
                                    className="btn btn-danger">
                                    Eliminar
                                </button>
                            </div>
                        </td>
                    </tr>
                )} 
                {/* {<p aria-live="polite">Current products: <strong>{JSON.stringify(this.props.products)}</strong></p> } */}
                </tbody>
                </table>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.products,
    ProductStore.actionCreators
)(Product as any);
