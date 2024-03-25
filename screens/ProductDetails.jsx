import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./productDetails.style";
import { COLORS, SIZES } from "../constants";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
              <TouchableOpacity onPress={() => increment()}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>
              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Lectus sit amet est placerat. Pulvinar proin gravida hendrerit lectus. Sed
              egestas egestas fringilla phaseempus. Arcu ac tortor dignissim convallis aenean et. Vel turpis nunc eget lorem dolor sed.
            </Text>
          </View>
          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Ionicons name="location-outline" size={20} />
                <Text style={styles.ratingText}> Allipuram, Visakhapatnam </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
                <Text style={styles.ratingText}> Free Delivery </Text>
              </View>
            </View>
          </View>
          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Text style={styles.cartTitle}>BUYDSDD NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
