import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Logo = () => <Text>Lalalala</Text>

const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="ir a detalle" onPress={() => navigation.navigate('Detail', {lala: 'lele', id: 1} )}/>     
    </View>
  )
}

HomeScreen.navigationOptions = {
  headerTitle: <Logo/>,
  headerRight: (
    <Button onPress={() => alert('Lalalalala')} title="Soy lala" color="#222"/>
  )
}

const DetailScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const incrementar = () => setCount(count + 1)
  useEffect(() => {
    navigation.setParams({ incrementar })
  }, [count])
  const lala = navigation.getParam('lala', 'valor por defecto')
  return(
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle {count}!</Text>
      <Button title="Volver" onPress={() => navigation.setParams({title: 'Pepito'})}/>    
    </View>
  )
}

DetailScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return {
    title: navigation.getParam('title', 'Cargando...'),
    headerRight: (
      <Button onPress={navigation.getParam('incrementar')} title="Mas uno" color="#555"/>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
}, { 
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fdc'
      },
      headerTintColor: '#555',
      headerTitleStyle: {
        fontWeight: '900'
      }
    }
  })

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});