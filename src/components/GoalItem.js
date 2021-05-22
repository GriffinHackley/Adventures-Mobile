import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { SwipeRow } from 'react-native-swipe-list-view';

export class GoalItem extends React.Component {
  styles = StyleSheet.create({
    base: {
      backgroundColor: 'white',
      height: 64,
      borderBottomWidth: 1,
    },
    deleteButton: {
      flex: 1,
      backgroundColor: 'red',
      height: 64,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 16,
    },
    whiteText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    hidden: {
      flexDirection: 'row',
    },
    visible: {
      justifyContent: 'center',
      paddingLeft: 16,
    }
  });

  state = {
    title: '',
  }

  delete = () =>{
  }

  render() {
    const { goal } = this.props;
    return (
      <SwipeRow
        rightOpenValue={-125}
        leftOpenValue={125}
        stopRightSwipe={-145}
        stopLeftSwipe={145}
      >
        <View style={[this.styles.base, this.styles.hidden]}>
          {/* HIDDEN: need to swipe to see this content */}
          <TouchableOpacity onPress={this.delete} style={this.styles.deleteButton}>
            <Text style={this.styles.whiteText}>DELETE</Text>
          </TouchableOpacity>
        </View>
        <View style={[this.styles.base, this.styles.visible]}>
          {/* VISIBLE: visible by default */}
          <Text>{goal.type}:{goal.progress}/{goal.value}</Text>
        </View>
      </SwipeRow>
    );
  }
}

const mapPropsToDispatch = {

};

export default connect(null, mapPropsToDispatch)(GoalItem);
