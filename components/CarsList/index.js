import { View, Text,FlatList, Dimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';
const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={cars}
      renderItem={({item})=><CarItem car={item}
      showsVerticalScrollIndicator={false}
      snapToAlignment={"start"}
      decelerationRate={'fast'} 
    //   {/* declaration fast */ }
      snaptoInterval={Dimensions.get('window').height} 
        />} //send item to CarItem
      />
    </View>
  );
};

export default CarsList;
