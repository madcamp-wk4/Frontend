import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const MainHome = ({ navigation }) => {
  // ID와 해당 화면 매핑
  const cardScreens = {
    1: "dateRecord",   // ID 1 -> DateRecord.js
    2: "getDateScore",     // ID 2 -> GetScore.js
    3: "loverProfile", // ID 3 -> CompareGoals.js
    4: "myProfile",    // ID 4 -> TimerPage.js
  };

  const cards = [
    {
      id: 1,
      image: require("../assets/main-1.png"),
    },
    {
      id: 2,
      image: require("../assets/main-2.png"),
    },
    {
      id: 3,
      image: require("../assets/main-3.png"),
    },
    {
      id: 4,
      image: require("../assets/main-4.png"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.menuIcon}>≡</Text>
      </View>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={styles.card}
          onPress={() => navigation.navigate(cardScreens[card.id])} 
        >
          <Image source={card.image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  menuIcon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 12,
    margin: 15,
    padding: 20,

    alignItems: "center",
    width: 350,
    height: 150,

  },

});

export default MainHome;
