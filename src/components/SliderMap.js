import React from 'react';
import { Slider } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const SliderMap = ({ value, onValueChange }) => {
  return (
    <Slider 
      value={value}
      onValueChange={onValueChange}
      minimumValue={0}
      maximumValue={500}
      minimumTrackTintColor="#024959"
      maximumTrackTintColor="#d3d3d3"
      thumbTintColor="#024959"
      style={styles.slider}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default SliderMap;