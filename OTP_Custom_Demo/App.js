import React from 'react';
import {StyleSheet, View, ViewPropTypes, TextInput, Text, Alert} from 'react-native';
import CustomOTPView from './CustomOTPView'

class CustomTextInput extends React.Component {
  state = {
    color:null
  }
  onFocus = () => {
    this.setState({
      color:true
    })
  }

  onBlur = () => {
    this.setState({
      color:false
    })
  }
  render(){
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
        <Text>Hello</Text>
        <CustomOTPView
          cellCount={4}
          otpContainer={{width:'60%'}}
          backgroundColor={'#000'}
          borderColor={'red'}
          textInputStyle={'line'}
          successColor={'green'}
          errorColor={'red'}
          // CellStyle={this.state.color ? styles.cellColor : styles.cellColor1}
          autoFocus={true} // ture or false
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cellColor:{
    borderColor:'green'
  },
  cellColor1:{
    borderColor:'red'
  }
})

export default CustomTextInput;