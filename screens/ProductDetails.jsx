import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
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
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: "https://res.cloudinary.com/dmlhm8dwi/image/upload/v1655812677/cld-sample-4.jpg" }} style={styles.image} />
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Product</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>₹ 660.88</Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color="gold" />
              ))}
              <Text style={styles.ratingText}> (4.9)</Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity onPress={() => {}}>
                <SimpleLineIcons name="plus" size={20}  />
              </TouchableOpacity>
              <Text style={styles.ratingText}> (4.9)</Text>
              <TouchableOpacity onPress={() => {}}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
