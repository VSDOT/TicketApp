import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Upload from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Button() {
  const navigation = useNavigation();
  // Responsive Screen
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions({window});
    });
    return () => subscription?.remove();
  });

  const {window} = dimensions;
  let windowWidth = window.width;
  let windowHeight = window.height;
  // Responsive Screen
  return (
    <View className="justify-center items-center my-2 mt-0">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TicketUploadScreen');
        }}
        style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
        className="px-20 py-3 rounded-full items-center space-x-2">
        <Upload name="file-upload-outline" size={20} color="white" />
        <Text
          className="text-white"
          style={{
            fontSize: windowWidth > 500 ? hp(2.3) : hp(2),
            fontFamily: 'Montserrat-SemiBold',
          }}>
          Upload Tickets
        </Text>
      </TouchableOpacity>
    </View>
  );
}
