import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Alert from 'react-native-vector-icons/dist/Feather';
import {useNavigation} from '@react-navigation/native';

export default function ProfileAmountStatus() {
  const navigation = useNavigation();

  const AmountStatus = [];
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="">
        <StatusBar backgroundColor="#1bc0f6" />
        <View
          className="items-center justify-between p-5"
          style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            className=""
            name="arrow-left-long"
            size={30}
            color="white"
          />
          <Text
            className="text-center text-white text-xl"
            style={{fontFamily: 'Montserrat-SemiBold'}}>
            Amount Status
          </Text>
          <Text style={{color: '#1bc0f6'}}>1.30</Text>
        </View>
        <View className="">
          <FlatList
            numColumns={2}
            data={AmountStatus}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View className="space-y-4">
                <Image className="w-56 h-44" source={item.image} />
                <Text className="text-bold text-3xl">{item.title}</Text>
              </View>
            )}
            ListEmptyComponent={
              <View className="items-center justify-center space-y-2 py-56">
                <Alert name="alert-circle" size={40} color="gray" />
                <View className="items-center">
                  <Text
                    className="text-xl text-gray-500"
                    style={{fontFamily: 'Montserrat-SemiBold'}}>
                    No Account Details .
                  </Text>
                  <Text
                    className="text-xl text-gray-500"
                    style={{fontFamily: 'Montserrat-SemiBold'}}>
                    Only for Ticket Uploader page .
                  </Text>
                </View>
              </View>
            }
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
