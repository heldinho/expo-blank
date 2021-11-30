import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <View style={styles.header} />
            <View style={styles.body} />
            <View style={styles.footer} />
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
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
