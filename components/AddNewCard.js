import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import { white } from '../utils/colors';
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';

const AddNewCard = ({ decks, dispatch, route, navigation }) => {
  const deckId = route.params ? route.params.id : null;
  const deck = deckId ? decks[deckId] : null;

  if (!deck) return (
    <View style={styles.container}>
      <Text style={styles.header}>This deck is not found!</Text>
    </View>
  )

  let deckTitle = deck.title.length <= 10 ? deck.title : deck.title.slice(0, 10) + "...";
  navigation.setOptions({ headerBackTitleVisible: true })
  navigation.setOptions({ headerBackTitle: deckTitle })
  navigation.setOptions({ title: "Add card" })

  const [cardQuestion, setCardQuestion] = useState("");
  const [cardAnswer, setCardAnswer] = useState("");

  const handleAddCard = () => {
    const card = {
      question: cardQuestion,
      answer: cardAnswer
    };
    addCardToDeck({ decks, deckId, card }).then(() => dispatch(addCard(deckId, card)))
    navigation.navigate("Details", { id: deckId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add new card</Text>
      <TextInput
        style={styles.cardInput}
        onChangeText={text => setCardQuestion(text)}
        placeholder="Card question"
        value={cardQuestion} />
      <TextInput
        style={styles.cardInput}
        onChangeText={text => setCardAnswer(text)}
        placeholder="Card answer"
        value={cardAnswer} />
      <View style={styles.btnContainer}>
        <Button
          onPress={handleAddCard}
          buttonStyle={{ backgroundColor: "black", height: 50 }}
          title="Add card"
          type="solid"
          raised
          disabled={!cardQuestion || !cardAnswer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight - 20 || 0,
    padding: 20,
    alignItems: "center",
    backgroundColor: white
  },
  header: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 20
  },
  cardInput: {
    width: "100%",
    height: 50, 
    borderWidth: 1,
    borderRadius: 5, 
    paddingLeft: 10,
    marginBottom: 20
  },
  btnContainer: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 20,
  },
});
 
const mapStateToProps = decks => ({ decks })
export default connect(mapStateToProps)(AddNewCard);