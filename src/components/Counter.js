// Imports: Dependencies
import * as React from 'react';

//import { connect } from 'react-redux';

// Screen: Counter

/*
<SafeAreaView style={styles.container}>
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Logged In: </Text>
          <Text style={styles.loggedInText}>{`${this.props.loggedIn}`}</Text>
          <Button
            title="Login"
            onPress={this.props.loggedIn === false ? () => this.props.reduxLogin(true) : () => this.props.reduxLogin(false)}
            style={styles.loginButton}
          />
        </View>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => this.props.reduxIncreaseCounter()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.reduxDecreaseCounter()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

*/

export default class Counter extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
            <div>
                Contador ejemplo
            </div>

    )
  }
}
/* // Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   loggedInContainer: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 40,
   },
   loginButton: {
     marginTop: 20,
     paddingTop: 20,
   },
   counterContainer: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
   loggedInText: {
     fontFamily: 'System',
     fontSize: 17,
     fontWeight: '400',
     color: '#000',
   },
   counterTitle: {
     fontFamily: 'System',
     fontSize: 32,
     fontWeight: '700',
     color: '#000',
   },
   counterText: {
     fontFamily: 'System',
     fontSize: 36,
     fontWeight: '400',
     color: '#000',
   },
   buttonText: {
     fontFamily: 'System',
     fontSize: 50,
     fontWeight: '300',
     color: '#007AFF',
     marginLeft: 40,
     marginRight: 40,
   },
});
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
  };
};
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    // Login
    reduxLogin: (trueFalse) => dispatch(login(trueFalse)),
  };
};
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter); */