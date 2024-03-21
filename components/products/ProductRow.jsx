import { FlatList, View, Text } from "react-native";
import React from "react";
import styles from "./productRow.style";
import { SIZES } from "../../constants";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>Product</Text>;
        }}
        horizontal
        contentContainerStyle={{
          columnGap: SIZES.medium,
        }}
      />
    </View>
  );
};

export default ProductRow;
