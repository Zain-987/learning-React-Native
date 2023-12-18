import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {

    setCounter(counter => counter + 1)
  }

  const decreaseCounter = () => {

    if(counter === 1){
        return Alert.alert("We can't delete any more !")
    }
    setCounter(counter => counter - 1)
  }
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "700" , textAlign : 'center'}}>Counter</Text>
      <View style={{ flexDirection: "row" , justifyContent : 'center' , marginTop : 40  , gap : 20 , alignItems : "center"}}>
        <Pressable
        style={{padding : 10,  borderRadius : 4 , elevation : 2}}
        onPress={decreaseCounter}
        >
          <AntDesign name="minus" size={24} color="black" />
        </Pressable>
        <Text style={{fontSize : 24 , fontWeight : "700"}}>{counter}</Text>

        <Pressable
        style={{padding : 10,  borderRadius : 4 , elevation : 2}}
        onPress={increaseCounter}
        >
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
