import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetails from './DeckDetails';
import AddNewDeck from './AddNewDeck';
import AddNewCard from './AddNewCard';
import BottomNavigator from './BottomNavigator';
import { purple, white } from '../utils/colors';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Decks"
        component={BottomNavigator} />
      <Stack.Screen
        name="Details"
        component={DeckDetails}
        options={{
          headerStyle: {
            backgroundColor: purple,
          },
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: "center",
            position: "relative",
            left: -30,
          },
        }} />
      <Stack.Screen
        name="AddCard"
        component={AddNewCard}
        options={{
          headerStyle: {
            backgroundColor: purple,
          },
          headerTintColor: white,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: "center",
            position: "relative",
            left: -30,
          },
          headerBackTitleStyle: {
            fontSize: 16
          }
        }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;