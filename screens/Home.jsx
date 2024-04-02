import { TouchableOpacity, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./home.style";
import { Carousel, Headings, ProductRow, Welcome } from "../components";


const Home = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Visakhapatnam</Text>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
