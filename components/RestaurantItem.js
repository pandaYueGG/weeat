import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ marginBottom:6 }}>
      <View
        style={{ marginTop: 6, padding:12, backgroundColor:"white" }}
      >
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => (
  <>
    <Image
      source={{uri:"https://images.unsplash.com/photo-1599458448510-59aecaea4752?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}}
      style={{ width: "100%", height: 200}}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={ 25 } color="white" />
    </TouchableOpacity>
  </>
) ;

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{ fontSize: 15, fontWeight:"bold" }}
      >
        This is a beatiful restaurant
      </Text>
      <Text
        style={{ fontSize: 13, color: "gray" }}
      >20-30 • min</Text>
    </View>
    <View
      style={{
        backgroundColor:"#1982c4",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold"}}>4.8</Text>
    </View>
  </View>
)