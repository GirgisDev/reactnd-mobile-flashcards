import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { white, gray } from '../utils/colors';

const Deck = ({ deck }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>{ deck.title }</Text>
      <Text style={styles.cardText}>{ deck.questions.length } cards</Text>
    </View>
  );
}
 
export default Deck;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "90%",
    minHeight: 180,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: .2,
    shadowRadius: 9
  },
  cardHeader: {
    fontSize: 30
  },
  cardText: {
    fontSize: 18,
    color: gray
  }
})