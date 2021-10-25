import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function App(){
  return(
    <View style={styles.rootContainer}>
      <View style={styles.boxContainer}>
        <Image 
          source={{uri: 'https://cdn-wp.thesportsrush.com/2019/02/GettyImages-1126604603.jpg'}}
          style={styles.img}
        />
        <Text style={styles.textName}>Christiano Ronaldo</Text>
      </View>
      <View style={styles.boxMoney}>
        <Text style={styles.textMoney}>Rp. 1.560.900</Text>
        <Text style={styles.textTopup}>TOPUP WALLET</Text>
      </View>
      <Text style={styles.textInfo}>Address</Text>
      <Text style={styles.textInfo}>Jl. Tanah Merdeka</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  boxContainer: {
    width: width,
    height: height*0.4,
    backgroundColor: '#6f1887',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: width*0.3,
    height: width*0.3,
    borderRadius: width
  },
  textName: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  boxMoney: {
    width: width*0.8,
    height: 80,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: -40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  textMoney: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  },
  textTopup: {
    color: '#6f1887',
    fontSize: 14,
    fontWeight: 'normal'
  },
  textInfo: {
    color: 'black',
    fontSize: 14,
    marginLeft: 20
  }
})