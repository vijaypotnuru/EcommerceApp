import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Continue",
        onPress: () => {
          setUserLogin(false);
          console.log("Yes Pressed");
        },
      },
      // {
      //   defaultIndex: 1,
      // },
    ]);
  };

  const clearCache = () => {
    Alert.alert("Clear Cache", "Are you sure you want to clear cache?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Continue",
        onPress: () => {
          console.log("Yes Pressed");
        },
      },
      // {
      //   defaultIndex: 1,
      // },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={COLORS.gray} /> */}
        <View style={{ width: "100%" }}>
          <Image source={require("../assets/images/space.jpg")} style={styles.cover} />
        </View>
        <View style={styles.profileContainer}>
          <Image source={require("../assets/images/profile.jpeg")} style={styles.profile} />
          <Text style={styles.name}>{userLogin === true ? "John" : "Please Login into your account"}</Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>vijaypotnuru123@gmail.com</Text>
            </View>
          )}
          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons name="heart-outline" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons name="truck-delivery-outline" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons name="bag" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons name="cached" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Clear cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="deleteuser" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
