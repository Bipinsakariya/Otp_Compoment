import React,{ Component } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';

export default class TextField extends Component {
    state = {
        foucs: false
    }
    render(){
        const { title, ref, TxtInputStyle, onChangeText, placeholder, value, onSubmitEditing, containerStyle, ActiveColor, BlurColor, Error, ErrorMsg } = this.props
        return(
            <View style={{width:'100%', alignItems:'center'}}>
                {/* <Text onPress={()=> Keyboard.dismiss()}>HEllO</Text> */}
                <View style={[styles.textField, containerStyle]}>
                    {value || this.state.foucs ? (
                        <Text style={[styles.titleText,{color:Error ? 'red' : this.state.foucs ? ActiveColor : BlurColor }]}>
                            {title}
                        </Text>
                    ) : null}
                    <TextInput
                        ref={ref}
                        style={[styles.txtInput, TxtInputStyle,{borderBottomColor: Error ? 'red' : this.state.foucs ? ActiveColor : BlurColor }]}
                        autoCapitalize={"none"}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={Error ? 'red' : 'gray'}
                        returnKeyType="next"
                        value={value}
                        onSubmitEditing={onSubmitEditing}
                        onBlur={()=> this.setState({foucs:false})}
                        onFocus={()=> this.setState({foucs:true})}
                    />
                    {Error ? (
                        <Text style={[styles.errorText,{color: Error && 'red'}]}>
                            {ErrorMsg}
                        </Text>
                    ) : null}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textField: {
		width: "96%",
		alignSelf: "center"
    },
    txtInput: {
		width: "96%",
		alignSelf: "center",
		height: 50,
		fontSize: 17,
        paddingHorizontal: 10,
        borderBottomColor:'red',
        borderBottomWidth:1
	},
	titleText: {
		color: 'black',
		fontWeight: "500",
		fontSize: 14,
        width: "94%",
        alignSelf:'center'
    },
    errorText: {
		color: 'black',
		// fontWeight: "500",
		fontSize: 16,
        marginVertical: 5,
        width: "94%",
        alignSelf:'center'
	},
})