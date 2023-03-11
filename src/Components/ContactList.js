import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { alphabet } from '../data/Alphabets';
import {contacts} from '../data/Contacts';

const ConactList = () => {
  let sections = alphabet.map(letter => ({
    letter: letter,
    contacts: contacts.filter(contact => contact.name.startsWith(letter)),
  }));
  return (
    <View style={styles.listContainer}>
    <FlatList
      data={sections}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      renderItem={({item}) => {
        return (
          <View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: '1%',
                  fontWeight: '700',
                }}>
                {item.letter}
              </Text>
            </View>
            <View style={{marginHorizontal: '4%'}}>
              {item.contacts.map(contact => (
                <View
                  key={contact.phoneNumber}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    key={contact.phoneNumber}
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#737373',
                      marginBottom: '1%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '75%',
                      paddingRight: '12%',
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 12,
                        paddingBottom: '0.5%',
                      }}
                      key={contact.phoneNumber}>
                      {contact.name}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 12,
                        paddingBottom: '0.5%',
                        opacity: 0.5,
                      }}
                      key={contact.name}>
                      {contact.phoneNumber}
                    </Text>
                  </View>
                  <View key={contact.name}>
                    {contact.joined === 1 ? (
                      <Image
                        key={contact.phoneNumber}
                        source={require('../assets/Joined.png')}
                        style={{
                          height: 20,
                          width: 40,
                          resizeMode: 'contain',
                        }}
                      />
                    ) : (
                      <Text
                        style={{
                          fontSize: 12,
                          paddingBottom: '0.5%',
                          color: '#BE9F56',
                        }}>
                        INVITE
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      }}
    />
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 110,
        backgroundColor: '#FFFFFF',
        opacity: 0.8,
      }}
    />

    <FlatList
      data={alphabet}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      renderItem={({item, index}) => {
        return (
          <View>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '600',
                color: index === 0 ? '#BE9F56' : '#000',
              }}>
              {item}
            </Text>
          </View>
        );
      }}
    />
  </View>
  )
}

export default ConactList

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
    flex: 1,
    flexDirection: 'row',
  },
})