import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function GoalItem(props) {
  const [isDone, setIsDone] = useState(false);

  const doneTask = () => {
    if (isDone === true) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
    
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={doneTask}
        //onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text
          style={[
            { textDecorationLine: isDone ? "line-through" : "none" },
            styles.goalText,
          ]}
        >
          {props.text}
        </Text>
        {/* <Text style={styles.goalText}>{props.text}</Text> */}
        <Pressable
          //android_ripple={{ color: "#dddddd" }}
          //onPress={isDone ? props.text.strike() : props.text()}
          onPress={props.onDeleteItem.bind(this, props.id)}
          //style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Ionicons name="checkbox" margin={5} size={25} color="indianred" />
        </Pressable>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  strike: {
    textdecoration: "line-through",
  },
});
