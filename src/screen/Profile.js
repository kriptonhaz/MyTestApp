import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

export default function Profile(){
  const navigation = useNavigation();

  function onLogout(){
    navigation.goBack();
  }
  
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
      <TouchableOpacity style={styles.btnLogin} onPress={onLogout}>
        <MCIcon 
          name="logout"
          size={width*0.05}
          color={'white'}
        />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
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
    alignItems: 'center'
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
  text: {
    color: 'white',
    fontSize: 24
  },
  btnLogin: {
    width: width*0.5,
    height: 50,
    backgroundColor: '#551682',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center'
  }
})