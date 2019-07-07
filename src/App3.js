import React from 'react';
import Temperature from './Temperature'
import Loading from './Loading';
import InputCity from  './InputCity';
import {connect } from 'react-redux'
let App = ({ callDone, cityName,getByUrl }) => {
  if(cityName && !callDone){
                        getByUrl(cityName)
                     }
  return (
          <div>
              <InputCity/>
              <Loading />
              <Temperature />
          </div>
  );
}
//<Temperature name={id} />
const mapStateToProps = (state, ownProps) => ({
   cityName: ownProps.match.params[0],
   callDone: state.reducer.callDone,
});
const mapDispatchToProps = dispatch => ({
    getByUrl: (name) => { dispatch({type:'GET_TEMP',name}); },
});
App = connect(mapStateToProps,mapDispatchToProps,)(App);
export default App;