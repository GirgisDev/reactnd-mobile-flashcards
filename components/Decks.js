import React, { useEffect } from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import { FlatList } from 'react-native';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { connect } from 'react-redux';
import Deck from './Deck';

const Decks = ({ dispatch, decks }) => {
  useEffect(() => {
    fetchDecks().then(decks => dispatch(receiveDecks(decks)));
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={decks}
        style={{ backgroundColor: "#FFF" }}
        renderItem={item => <Deck deck={item.item} index={item.index} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = decks => ({ decks: Object.keys(decks).map(key => decks[key]) })
export default connect(mapStateToProps)(Decks);