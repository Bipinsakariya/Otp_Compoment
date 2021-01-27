import React, { createRef } from 'react';
import {StyleSheet, View, ViewPropTypes, TextInput, Text, Alert} from 'react-native';

class CustomOTPView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cellCount:[],
      color:this.props.textInputStyle === 'Default' ? 'white' : this.props.textInputStyle === 'line' ? 'black' : this.props.backgroundColor,
      reference:[],
      value:[],
      textInputStyle:this.props.textInputStyle
    }
  }

  componentDidMount(){
    console.log("hh",this.refs);
    const arr = [];
    const refarray = [];
    const n = this.props.cellCount
    for (var i = 0; i < n; i++) {
        var obj = {
          id:i,
          color:this.state.color,
        };
        arr.push(obj);
        refarray.push({
          refer:createRef()
        })
        
        this.setState({cellCount:arr})
    }
    this.setState({
      reference:refarray
    });
  }

  onFocus = () => {
    this.setState({
      focus:true
    })
  }

  render(){
    const {otpContainer, CellStyle, autoFocus, onFocus, onBlur, onChangeText, onChange, errorColor, successColor} = this.props
    const mainvalue = this.state.value.join('')
    return (
        <View style={[styles.otpContainer,otpContainer]}>
          {this.state.cellCount.map((item, index)=> {
            return(
              <TextInput
                key={item.id}
                ref={'textInput'+index}
                maxLength={1}
                onChangeText={(value) => {
                  this.state.value.push(value)
                  if (value !== '') {
                    this.setState({...value})
                    // console.log('value', ...value + value)
                    this.state.cellCount.length-1 === index ? null : this.refs['textInput' + (index+1)].focus()
                  }
                           
                }}
                onSubmitEditing={()=> {
                    if(mainvalue.toString() === '1234'){
                      this.setState({color:successColor})
                    } else {
                      this.setState({color:errorColor})
                    }        
                }}
                returnKeyType={'done'}
                keyboardType={'number-pad'}
                onFocus={()=> this.setState({color1:this.state.cellCount[index].color = 'green'})}
                onBlur={()=> this.setState({color:this.state.cellCount[index].color = this.state.color})}
                autoFocus={index === 0 && autoFocus}
                style={[styles.textInputLine, CellStyle,{borderBottomColor:this.state.color}]}
                onKeyPress={(event) => {
                  if(event.nativeEvent.key === 'Backspace'){
                    index === 0 ? null :
                    this.refs['textInput'+ (index-1)].focus()
                  }
                }}
              />
            )}
          )}
        </View>
    );
  }
};
const styles = StyleSheet.create({
  textInputDefault:{
    padding: 10,
    borderRadius: 5,
    backgroundColor:'white',
    height: 40, 
    width: 30,
    borderColor:'#000',
    borderWidth:1
  },
  textInputLine:{
    padding: 10,
    height: 40, 
    width: 30,
    borderBottomColor:'green',
    borderBottomWidth:1
  },
  otpContainer:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'100%'
  }
})
export default CustomOTPView;