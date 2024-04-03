import { FlatList, View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./productRow.style";
import { COLORS, SIZES } from "../../constants";
import { ActivityIndicator } from "react-native";
import { ProductCardView } from "../../components";
import fakeData from "../../fakeData";

const ProductRow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={fakeData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <ProductCardView item={item} />;
          }}
          horizontal
          contentContainerStyle={{
            columnGap: SIZES.medium,
          }}
        />
      )}
    </View>
  );
};

export default ProductRow;
