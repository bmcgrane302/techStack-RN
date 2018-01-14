import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {


  render() {

    return (

      <Text></Text>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
