import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./productDetails.style";
import { COLORS } from "../constants";

const ProductDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: "https://res.cloudinary.com/dmlhm8dwi/image/upload/v1655812677/cld-sample-4.jpg" }} style={styles.image} />
        <View style={styles.details}>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
