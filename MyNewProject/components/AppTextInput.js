import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, style, iconPress, onIconPress, placeholder, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.text}
          style={styles.icon}
        />
      )}
      
      <TextInput
       
        placeholder={placeholder}
        {...otherProps}
      />

      {iconPress && (
        <TouchableOpacity onPress={onIconPress}>
          <MaterialCommunityIcons
            name={iconPress}
            size={20}
            color={colors.text}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: "row",
    width: "100%",
    padding: 5,
    marginVertical: 10,
    borderColor: 'black',
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
   
  },
  icon: {
    marginRight: 10,
    top: 10,
  },

});

export default AppTextInput;
