import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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
      <Button title="Volver" onPress={() => navigation.navigate('MiModal')}/>    
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

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
}, { 
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    tabBarOptions: {
      backgroundColor: '#fec'
    }
  }
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  MiModal: () => <Text>KLalalalala</Text>
}, {
  mode: 'modal',
  headerMode: 'none'
})

export default createAppContainer(RootStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
