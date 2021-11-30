import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.header} />
        <View style={styles.body} />
        <View style={styles.footer} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  content: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  body: {
    flex: 6,
  },
  footer: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
});
