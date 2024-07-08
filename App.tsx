/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';

import './global.css';

function App(): React.JSX.Element {
  console.log('hello world.')
  return (
    <SafeAreaView className='bg-green-100 flex-1'>
      <StatusBar />
      <View className='border border-gray-200 rounded-lg mx-4 my-2 p-4 bg-white flex flex-row'>
        <View className='w-16 h-16 bg-gray-300 rounded-full'></View>
        <View className='ml-4'>
          <Text className='mt-2'>Phoenix Bakepxr</Text>
          <Text className='text-gray-400 text-sm mt-1'>Created an iOS App Store build.</Text>
          <View className='mt-2 bg-blue-100 py-[2px] rounded-full w-24 items-center'>
            <Text className='text-sm text-blue-500'>Building...</Text>
          </View>
        </View>
      </View>

      <View className='border border-gray-200 rounded-lg mx-4 my-2 p-4 bg-white flex flex-row'>
        <View className='w-16 h-16 bg-orange-300 rounded-full'></View>
        <View className='ml-4'>
          <Text className='mt-2'>Andi Lane</Text>
          <Text className='text-gray-400 text-sm mt-1'>Created an iOS App Store build.</Text>
          <View className='mt-2 bg-green-50 py-[2px] rounded-full w-24 items-center'>
            <Text className='text-sm text-green-500'>Finished</Text>
          </View>
        </View>
      </View>

      <View className='border border-gray-200 rounded-lg mx-4 my-2 p-4 bg-white flex flex-row'>
        <View className='w-16 h-16 bg-sky-300 rounded-full'></View>
        <View className='ml-4 flex-1'>
          <Text className='mt-2'>Phoenix Baker</Text>
          <Text className='text-gray-400 text-sm mt-1'>Published an update "Fixes typo" on production via Github.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App