import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function One() {
  return (
    <WebView
        source={{
          uri: 'https://paytm.com/shop/h/brand-store/fashion-sale'
        }}
        
      />
  )
}