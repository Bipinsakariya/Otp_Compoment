import React from 'react';
import {StyleSheet, View, ViewPropTypes, TextInput, Text, Alert} from 'react-native';
import OTPTextInput from './OTPTextInput'

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
      <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#fed8b1'}}>
        <Text style={{fontSize:30, fontWeight:'600', }}>OTP DEMO</Text>
        <View style={{paddingVertical:120, alignItems:'center', justifyContent:'center', width:'100%'}}>
          <OTPTextInput
            cellCount={4}
            otpContainer={{width:'60%'}}
            backgroundColor={'white'} //when textInputStyle is Default then use it.
            textInputStyle={'Default'} //Default or Line
            successColor={'#006400'}
            errorColor={'#FF0000'}
            // CellStyle={this.state.color ? styles.cellColor : styles.cellColor1}
            // autoFocus={true} // ture or false
          />
        </View>
       
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