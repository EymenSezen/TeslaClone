import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
// import CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/> 
      {/* Reusable component  */}
      <CarsList/>
      {/* <Text>Open up App.js to start working on your app!  YES</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});

