import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-virtualized-view';

export default function TicketUploadFormat() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#1bc0f6',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ImageBackground
        className="flex-1 w-full items-center justify-center"
        source={require('../../assets/Images/welcome-bg.png')}>
        <View>
          <Text className="text-black">Hello ahamed</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
