import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Image
          source={require('../assets/back_arrow.png')}
          style={{height: '30%', resizeMode: 'contain'}}
        />
        <Image
          source={require('../assets/logo.png')}
          style={{height: '30%', resizeMode: 'contain'}}
        />
        <Image
          source={require('../assets/shopping.png')}
          style={{height: '35%', resizeMode: 'contain'}}
        />
      </View>
  )
}

export default Header

const styles = StyleSheet.create({  
 headerContainer: {
    height: '8%',
    borderBottomWidth: 1,
    borderBottomColor: '#BE9F56',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
  },})