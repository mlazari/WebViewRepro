import { Tabs } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        lazy: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="webview"
        options={{
          title: 'WebView',
        }}
      />
    </Tabs>
  );
}
