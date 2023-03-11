import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../Components/Footer';
import ConactList from '../Components/ContactList';
import Header from '../Components/Header';

const Contacts = () => {
  return (
    <View style={styles.container}>
        <Header />
      <View style={styles.heroContainer}>
        <Text style={{fontSize: 10, textAlign: 'left'}}>786 contacts</Text>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: '800',
            marginRight: '5%',
          }}>
          CONTACTS
        </Text>
        <Image
          source={require('../assets/users.png')}
          style={{height: '35%', resizeMode: 'contain'}}
        />
      </View>

      <View style={styles.userContainer}>
        <View style={styles.profile}>
          <View
            style={{
              height: 50,
              backgroundColor: '#BE9F56',
              width: 50,
              borderRadius: 50 / 2,
            }}
          />
          <Text style={{fontSize: 20, textAlign: 'left', fontWeight: '800'}}>
            John Smith
          </Text>
        </View>
        <View style={styles.add}>
          <Image
            source={require('../assets/add.png')}
            style={{height: '50%', width: '10%', resizeMode: 'contain'}}
          />
        </View>
      </View>
      <ConactList />
      <Footer />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  headerContainer: {
    height: '8%',
    borderBottomWidth: 1,
    borderBottomColor: '#BE9F56',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
  },
  heroContainer: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
  },
  userContainer: {
    height: '9%',
    borderBottomWidth: 1,
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#BE9F56',
  },
  profile: {
    width: '50%',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  add: {
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
    flex: 1,
    flexDirection: 'row',
  },
});
