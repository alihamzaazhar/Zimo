import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={{height: "7%",}}>
    <View style={styles.container}>
      <Image source={require('../assets/search.png')} style={styles.img}/>
      <Image source={require('../assets/filter.png')} style={styles.img}/>
      <Image source={require('../assets/favorite.png')} style={styles.img}/>
      <Image source={require('../assets/profile.png')} style={styles.img}/>
    </View>
    </View>

  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
        flex: 1
    },
    img: {
        height: "40%",
        width: "40%",
        resizeMode: "contain"
    }
})