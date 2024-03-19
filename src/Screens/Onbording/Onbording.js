import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');
const isLandscape = width > height;

export default function Onbording2() {
  const [UserNumber, setUser] = useState({});
  const findNumber = async () => {
    const result = await AsyncStorage.getItem('UserNumber');
    console.log(result);
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };

  useEffect(() => {
    findNumber();
    // AsyncStorage.clear()
  }, []);
  const navigation = useNavigation();
  const swiperRef = useRef(null);

  const handleScrollToNext = () => {
    navigation.navigate('LoginScreen')
  };

  const messageList = [
    {
      id: 1,
      title: 'Welcome to Online Ticket Resale App',
      Disc: 'Movie , Sports and Other Events our Ticket selling or buying one of the best app',
      image: require('../../assets/Animations/Animation2.json'),
    },
    {
      id: 2,
      title: 'Find and Online Ticket Resale App',
      Disc: 'Movie , Sports and Other Events our Ticket selling or buying one of the best app',
      image: require('../../assets/Animations/Animation1.json'),
    },
    {
      id: 3,
      title: 'Find and Online Ticket Buying App',
      Disc: 'Movie , Sports and Other Events our Ticket selling or buying one of the best app',
      image: require('../../assets/Animations/Animation3.json'),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-1 items-center justify-center space-y-10 mt-28">
          <Swiper
            className="items-center justify-center"
            style={{height: width * 1.5}}
            ref={swiperRef}
            loop={true}
            activeDotColor='#1bc0f6'
            activeDotStyle={{ width : 15 }}
            autoplay={true}>
            {messageList.map(item => {
              return (
                <View
                  className="items-center justify-center space-y-6"
                  key={item.id}>
                  <StatusBar backgroundColor="white" barStyle="dark-content" />
                  <View
                    className="rounded-full"
                    style={{backgroundColor: '#1bc0f6'}}>
                    <LottieView
                      style={{width: width * 0.7, height: width * 0.7}}
                      source={item.image}
                      autoPlay
                      loop
                    />
                  </View>
                  <View className="space-y-3">
                    <Text
                      style={{
                        fontSize: hp(2.5),
                        fontFamily: 'Montserrat-SemiBold',
                      }}
                      className="text-black text-center px-12">
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: hp(1.9),
                        fontFamily: 'Montserrat-Medium',
                      }}
                      className="text-gray-500 text-center px-8">
                      {item.Disc}
                    </Text>
                  </View>
                  <View className="justify-center items-center">
                    <TouchableOpacity
                      onPress={handleScrollToNext}
                      style={{backgroundColor: '#1bc0f6'}}
                      className="px-24 py-4 rounded-full">
                      <Text
                        className="text-white"
                        style={{
                          fontSize: wp(4),
                          fontFamily: 'Montserrat-SemiBold',
                        }}>
                        Get Started
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
