import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DangNhap from './ASM/DangNhap'
import DangKy from './ASM/DangKi'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ButtomMenu from './ASM/ButtomMenu'
import PROFILE from './ASM/PROFILE'
import QandA from './ASM/QandA'
import TrangChu from './ASM/TrangChu'
import XemThemCayTrong from './ASM/XemThemCayTrong'
import XemHangMoiVe from './ASM/XemHangMoiVe'
import ChiTietCayTrong from './ASM/ChiTietCayTrong'
import XemThemChauCayChong from './ASM/XemThemChauCayTrong'

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='dangNhap' component={DangNhap}/>
        <stack.Screen name='dangKy' component={DangKy}/>
        <stack.Screen name='menu' component={ButtomMenu}/>
        <stack.Screen name='qanda' component={QandA}/>
        <stack.Screen name='xemThemCt' component={XemThemCayTrong}/>
        <stack.Screen name='xemHangMv' component={XemHangMoiVe}/>
        <stack.Screen name='chiTietCt' component={ChiTietCayTrong}/>
        <stack.Screen name='xemThemChauCt' component={XemThemChauCayChong}/>
      </stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})