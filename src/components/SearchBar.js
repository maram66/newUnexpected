import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Image } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import search_icon from '../../assets/search_icon.png';
import cancel from '../../assets/cancel_icon.png';

const SearchBar = () => {

  return (
    <View style={styles.container}>
      <View style={styles.searchBar__Style}>
        {/* search Icon */}
        <Image source={search_icon}/>
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search for projects"
          
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
     
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  
  searchBar__Style: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    height:"110%",
    backgroundColor: "#f7f7f7",
    borderRadius: 15,
    alignItems: "center",
  },

  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
  },

});