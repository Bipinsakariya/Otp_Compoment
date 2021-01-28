import React from 'react';
import {StyleSheet, View, ViewPropTypes, TextInput, Text, Alert, TouchableOpacity} from 'react-native';
import CustomBorderTextField from './CustomBorderTextField';
import TextField from './CustomTextField';
const isemailValid = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
// import OTPTextInput from './OTPTextInput'

class CustomTextInput extends React.Component {
  state = {
    color:null
  }

  submit(){
    if(this.state.email !== '' || this.state.email1 !== ''){
      this.setState({error: false})
      if (isemailValid(this.state.email || this.state.email1)) {
        this.setState({error: false})
        Alert.alert('Submit Success')
      } else {
        this.setState({error: true})
      }
    } else {
      this.setState({error: true})
    }
  }

  render(){
    return (
      <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#fed8b1'}}>
        <Text style={{fontSize:30, fontWeight:'600', }}>TextField Demo</Text>
        {/* <View style={{paddingVertical:120, alignItems:'center', justifyContent:'center', width:'100%'}}>
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
        </View> */}
        <TextField 
          title={'Email'}
          placeholder={'Email'}
          containerStyle={{marginVertical:20}}
          TxtInputStyle={{ borderBottomWidth: 1.5 }}
          onChangeText={(value)=> {this.setState({email:value})}}
          value={this.state.email}
          onSubmitEditing={()=> this.submit()} 
          // containerStyle={{}}
          ActiveColor={'blue'}
          BlurColor={'gray'}
          Error={this.state.error}
          ErrorMsg={'Enter valid email'}
        />
        <CustomBorderTextField
          title={'Email'}
          // placeholder={'Email'}
          TxtInputStyle={{ marginHorizontal:10 }}
          onChangeText={(value)=> {this.setState({email1:value})}}
          value={this.state.email1}
          onSubmitEditing={()=> this.submit()} 
          // containerStyle={{}}
          ActiveColor={'blue'}
          BlurColor={'gray'}
          Error={this.state.error}
          ErrorMsg={'Enter valid email'}
        />
        <TouchableOpacity style={{paddingVertical:15}} onPress={()=> this.submit()}> 
          <Text style={{paddingHorizontal:10, paddingVertical:10, backgroundColor:'coral', color:'white'}}>Submit</Text>
        </TouchableOpacity>
       
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