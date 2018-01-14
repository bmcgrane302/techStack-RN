import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
   const { library, selectLibraryId } = this.props;

    if(library.id === selectLibraryId){
      return (
       <Text>{library.description}</Text>
      );
    }
  }

  render () {
    const { titleStyles } = styles;
    const { id, title } = this.props.library;
    console.log('item props',this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
           <Text style={titleStyles}>
             {title}
           </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectLibraryId: state.selectedLibraryId };
};


export default connect(mapStateToProps, actions) (ListItem);
