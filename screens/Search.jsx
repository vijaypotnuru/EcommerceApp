import { TouchableOpacity, TextInput, SafeAreaView, FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import fakeData from "../fakeData";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  const handleSearch = async () => {
    try {
      const response = fakeData; // please change it with original API call
      setSearchResults(response);
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value={searchKey} onChangeText={setSearchKey} placeholder="What are you looking for" />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image source={require("../assets/images/Pose23.png")} style={styles.searchImage} />
        </View>
      ) : (
        <FlatList
          data={fakeData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{
            marginHorizontal: 12,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
