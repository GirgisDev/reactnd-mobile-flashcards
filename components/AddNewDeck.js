import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { submitDeck } from "../utils/api"
import { addDeck } from '../actions';

const AddNewDeck = ({ dispatch, navigation }) => {
  const [deckName, setDeckName] = useState("")

  const handleAddDeck = () => {
    navigation.navigate("Details")
    if (!deckName) return;
    
    const deck = {
      [deckName]: {
        title: deckName,
        questions: []
      }
    };
    submitDeck(deck).then(() => dispatch(addDeck(deck)));
    setDeckName("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.deckNameInput}
        onChangeText={text => setDeckName(text)}
        placeholder="Write your new deck's name"
        value={deckName} />
        <View style={styles.btnContainer}>
          <Button
            onPress={handleAddDeck}
            buttonStyle={{ backgroundColor: "black", height: 50 }}
            title="Add deck"
            type="solid"
            raised
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
    marginVertical: 8,
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    textAlign: "center",
    marginBottom: 20
  },
  deckNameInput: {
    width: "100%",
    height: 50, 
    borderWidth: 1,
    borderRadius: 5, 
    paddingLeft: 10,
  },
  btnContainer: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 20,
  },
});


export default connect()(AddNewDeck);