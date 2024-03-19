import {View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {Text} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ProfileSettings() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
      <StatusBar backgroundColor="#1bc0f6" />
      <View
        className="items-center justify-between p-5"
        style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          className=""
          name="angle-left"
          size={25}
          color="white"
        />
        <Text
          className="text-center text-white"
          style={{fontFamily: 'Montserrat-SemiBold' , fontSize : hp(2.5)}}>
          Settings
        </Text>
        <Text style={{color: '#1bc0f6'}}>1.00</Text>
      </View>
      <View className="my-5 space-y-2">
        <View className="items-center justify-between border-b border-gray-400 px-8 py-3" style={{ flexDirection:'row' }}>
          <Text className='text-gray-500' style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Clear cache Data</Text>
          <Icon name="angle-right" size={20} color="gray" />
        </View>
        <View className="items-center justify-between border-b border-gray-400 px-8 py-3" style={{ flexDirection:'row' }}>
          <Text className='text-gray-500' style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Check App Update</Text>
          <Icon name="angle-right" size={20} color="gray" />
        </View>
      </View>
    </ScrollView>
  );
}
