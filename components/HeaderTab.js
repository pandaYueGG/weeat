import { View, Text, SafeAreaView, TouchableOpacity  } from 'react-native'
import React from 'react';
import { useState } from 'react';

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View style={{flexDirection: "row", alignSelf:"center"}}>
      <HeaderButton
        text="Delivery"
        btnColor="#1982c4"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="#1982c4"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "#1982c4" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 24,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "#1982c4",
        fontSize: 15,
        fontWeight:"900",
      }}
    > {props.text}</Text>
  </TouchableOpacity>
);