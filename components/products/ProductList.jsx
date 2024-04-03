import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
import { ProductCardView } from "../../components";
import fakeData from "../../fakeData";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={fakeData} keyExtractor={(item) => item.id} numColumns={2} renderItem={({ item }) => <ProductCardView item={item} />} contentContainerStyle={styles.container} ItemSeparatorComponent={() => <View style={styles.separator} />} />
    </View>
  );
};

export default ProductList;
