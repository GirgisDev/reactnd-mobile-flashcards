import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { white, gray, red } from '../utils/colors';
import { Dimensions } from 'react-native'
import { connect } from 'react-redux';
import { removeDeck } from '../utils/api';
import { deleteDeck } from '../actions';

const DeckDetails = ({ decks, route, dispatch, navigation }) => {
  const deckId = route.params ? route.params.id : null;
  const deck = deckId ? decks[deckId] : null;
  navigation.setOptions({ title: deck ? deck.title : "Not found!" })

  const handleAddCard = () => {
    navigation.navigate("AddCard", { id: deckId });
  }
  const handleDeleteDeck = () => {
    removeDeck({ decks, deckId }).then(() => dispatch(deleteDeck(deckId)))
    navigation.navigate("Decks");
  }

  if (!deck) return (
    <View style={styles.detailsContainer}>
      <Text style={styles.header}>This deck is not found!</Text>
    </View>
  )

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{deck.title}</Text>
        <Text style={styles.cardsText}>{deck.questions.length} Cards</Text>
      </View>

      <View style={styles.deckDetailsBtn}>
        <Button
          onPress={handleAddCard}
          buttonStyle={{
            height: 50,
            borderColor: "black",
            borderWidth: 1,
            borderStyle: "solid",
            backgroundColor: white
          }}
          title="Add card"
          type="outline"
          titleStyle={{ color: "black" }}
          raised
        />
      </View>
      <View style={styles.deckDetailsBtn}>
        <Button
          onPress={handleAddCard}
          buttonStyle={{
            height: 50,
            backgroundColor: "#000"
          }}
          title="Start quiz"
          type="solid"
          raised
        />
      </View>
      <View style={styles.deckDetailsBtn}>
        <Button
          onPress={handleDeleteDeck}
          buttonStyle={{ height: 50 }}
          title="Delete"
          titleStyle={{ color: red }}
          type="clear"
          raised
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: white,
    flex: 1,
    padding: 40,
    paddingTop: 100,
  },
  textContainer: {
    alignSelf: "center",
    marginBottom: Dimensions.get('window').height - 500
  },
  header: {
    fontSize: 36,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  cardsText: {
    fontSize: 20,
    alignSelf: "center",
    color: gray
  },
  deckDetailsBtn: {
    marginBottom: 20
  },
})

const mapStateToProps = decks => ({ decks })
export default connect(mapStateToProps)(DeckDetails);