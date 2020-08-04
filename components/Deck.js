import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { white, gray } from '../utils/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Deck = ({ deck, index }) => {
  const navigation = useNavigation();
  const goToDetails = () => {
    navigation.navigate("Details", { id: deck.title.replace(/\s/g, "") })
  }
  return (
    <TouchableOpacity style={[styles.cardContainer, index === 0 && (styles.firstContainer)]} onPress={goToDetails}>
      <View style={styles.card}>
        <Text style={styles.cardHeader}>{deck.title}</Text>
        <Text style={styles.cardText}>{deck.questions.length} cards</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Deck;

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 10
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    width: "90%",
    minHeight: 120,
    marginVertical: 8,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: gray,
    borderWidth: 1,
    borderStyle: "solid"
  },
  cardHeader: {
    fontSize: 30,
    textAlign: "center"
  },
  cardText: {
    fontSize: 18,
    color: gray
  }
})