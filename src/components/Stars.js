import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function PassengerRatings() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <MaterialCommunityIcons name="star" color="#FFC107" size={20} />
      <MaterialCommunityIcons name="star" color="#FFC107" size={20} />
      <MaterialCommunityIcons name="star" color="#FFC107" size={20} />
      <MaterialCommunityIcons name="star" color="#FFC107" size={20} />
      <MaterialCommunityIcons name="star" color="#BDBDBD" size={20} />
    </View>
  );
}

export default PassengerRatings;
