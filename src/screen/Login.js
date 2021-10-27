import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("screen");

export default function Login(){
  return(
    <View style={styles.rootContainer}>
      <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'grey'}
      />
      <TextInput 
        style={[styles.input, { marginTop: 10}]}
        placeholder={'Password'}
        placeholderTextColor={'grey'}
        secureTextEntry
      />
      <TouchableOpacity style={styles.btnLogin}>
        <MCIcon 
          name="login"
          size={width*0.05}
          color={'white'}
        />
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 24
  },
  input: {
    width: width*0.8,
    height: 50,
    borderColor: '#ff8000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black'
  },
  btnLogin: {
    width: width*0.5,
    height: 50,
    backgroundColor: '#551682',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})