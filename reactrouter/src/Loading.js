import React from 'react';
import { connect } from 'react-redux'
import img from './fondo.jpg'
let Laoading = ({ loading }) => (
loading ?
<div style={{ textAlign: 'center' }}>
<img src={img} alt='loading' />
<h1>LOADING</h1>
</div> : null
);
const mapStateToProps=(state) => ({loading: state.reducer.loading})
Laoading = connect(mapStateToProps,null)(Laoading)
export default Laoading;