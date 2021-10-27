import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function Sample(){

  const contactList = [
    {
      id: 1,
      name: "Kripton",
      location: "Bogor",
      occupation: "Programmer"
    },
    {
      id: 2,
      name: "Eko",
      location: "Depok",
      occupation: "Admin"
    },
    {
      id: 3,
      name: "Agung",
      location: "Jakarta",
      occupation: "Mahasiswa"
    },
    {
      id: 4,
      name: "Bambang",
      location: "Jonggol",
      occupation: "Pengangguran"
    },
  ]

  const CardName = ({name, location, occupation}) => {
    return(
      <View style={styles.cardName}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{location}</Text>
        <Text style={styles.text}>{occupation}</Text>
      </View>
    )
  }
  return(
    <View style={styles.rootContainer}>
      <FlatList 
        data={contactList}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => {
          return(
            <View 
              style={styles.separator}
            />
          )
        }}
        renderItem={({item}) => {
          return(
            <CardName 
              name={item.name}
              location={item.location}
              occupation={item.occupation}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'black'
  },
  cardName: {
    backgroundColor: 'yellow',
    width: width*0.8,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 10
  },
  separator: {
    height: 20,
    width: width
  }
})