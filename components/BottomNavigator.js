import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { purple } from '../utils/colors';

import Decks from './Decks';
import AddNewDeck from './AddNewDeck';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: purple }}>
      <Tab.Screen 
        name="Decks" 
        component={Decks}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="layer-group" size={24} color={color} />
          ),
        }} />
      <Tab.Screen 
        name="AddDeck" 
        component={AddNewDeck}
        options={{
          tabBarLabel: 'AddDeck',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-add" size={24} color={color} />
          )
        }} />
    </Tab.Navigator>
  );
}
 
export default BottomNavigator;