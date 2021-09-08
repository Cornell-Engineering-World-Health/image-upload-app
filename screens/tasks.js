import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Title from "../components/title"

function TasksScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text size={50} style={style.title}>
        Today's Task
      </Text>
      <View style={style.textPadding}>
        <Text style={style.text}>Please choose the task that you'd like to complete today from
          the 3 selections below:
        </Text>
      </View>
      <TouchableOpacity style={style.buttonStyle} navigation={navigation} onPress={() => navigation.navigate('Home', { chosenTask: "Task 1", })}>
        <Text style={style.buttonText}>Task 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonStyle} navigation={navigation} onPress={() => navigation.navigate('Home', { chosenTask: "Task 2" })}>
        <Text style={style.buttonText}>Task 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonStyle} navigation={navigation} onPress={() => navigation.navigate('Home', { chosenTask: "Task 3" })}>
        <Text style={style.buttonText}>Task 3</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    backgroundColor: "#D8EDFA",
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "stretch",
    textAlign: 'center',
    marginVertical: 10,
    color: "#0F2B64",
    marginTop: 70,
  },
  buttonStyle: {
    alignItems: 'center',
    padding: 10,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#0F2B64",
    margin: 18
  },
  buttonText: {
    fontSize: 23,
    fontWeight: "bold"
  },
  text: {
    fontSize: 23,
    borderRadius: 10
  },
  textPadding: {
    margin: 40
  }

})

export default TasksScreen