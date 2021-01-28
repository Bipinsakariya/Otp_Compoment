import React,{ Component } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native';

export default class CustomBorderTextField extends Component {
    state = {
        foucs: false
    }
    render(){
        const { title, ref, TxtInputStyle, onChangeText, placeholder, value, onSubmitEditing, containerStyle, ActiveColor, BlurColor, Error, ErrorMsg } = this.props
        return(
            <View style={{width:'100%', alignItems:'center', paddingVertical:15}}>
                {/* <Text onPress={()=> Keyboard.dismiss()}>HELLO</Text> */}
                <Text style={[styles.titleText,{color: Error ? 'red' : this.state.foucs ? ActiveColor : BlurColor }]}>
                    {title}
                </Text>
                <View style={[styles.textField,{ borderColor: Error ? 'red' : this.state.foucs ? ActiveColor : BlurColor }]}>
                    <TextInput
                        ref={ref}
                        style={[styles.txtInput, TxtInputStyle]}
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
                </View>
                {Error ? (
                    <Text style={[styles.errorText,{color: Error && 'red'}]}>
                        {ErrorMsg}
                    </Text>
                ) : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textField: {
		width: "96%",
        alignSelf: "center",
        borderColor:'red',
        borderWidth:1,
        borderRadius:10
    },
    txtInput: {
		width: "96%",
		alignSelf: "center",
		height: 50,
		fontSize: 17,
        paddingHorizontal: 10,
	},
	titleText: {
		color: 'black',
		fontWeight: "500",
		fontSize: 14,
        // width: "94%",
        alignSelf:'flex-start',
        backgroundColor:'#fed8b1',
        position:'absolute',
        top:8,
        marginLeft:30,
        zIndex:10,
        paddingHorizontal:10
    },
    errorText: {
		color: 'black',
		// fontWeight: "500",
		fontSize: 18,
        marginVertical: 5,
        width: "94%",
        alignSelf:'center'
	},
})