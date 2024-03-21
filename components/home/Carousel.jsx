import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://res.cloudinary.com/dmlhm8dwi/image/upload/v1655812677/cld-sample-4.jpg",
    "https://res.cloudinary.com/dmlhm8dwi/image/upload/v1655812676/cld-sample-3.jpg",
    "https://res.cloudinary.com/dmlhm8dwi/image/upload/v1655812676/cld-sample-2.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "92%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
