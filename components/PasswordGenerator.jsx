import React, { useState } from "react";
import { Text, View, TextInput, Switch, StyleSheet, TouchableOpacity } from "react-native";

export default function PasswordGenerator() {
  const [length, setLength] = useState("");
  const [includeLower, setIncludeLower] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    
    let characterSet = "";
    if (includeLower) characterSet += lowerChars;
    if (includeUpper) characterSet += upperChars;
    if (includeNumber) characterSet += numberChars;
    if (includeSymbol) characterSet += symbolChars;

    if (characterSet.length === 0) {
      alert("Please select at least one character type to include in the password.");
      return;
    }
    if(isNaN(length)){
      alert("Please enter a valid number for the password length.");
      return;
    }
    if(length > 100){
      alert("Password length should be less than 100.");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      newPassword += characterSet[randomIndex];
    }

    setPassword(newPassword);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <TextInput
        type="number"
        style={styles.input}
        placeholder="Password length <= 100"
        onChangeText={(text) => setLength(text)}
        value={length}
      />
      <Text style={styles.password}>{password}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Include lower case letters</Text>
        <Switch value={includeLower} onValueChange={setIncludeLower} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Include upper case letters</Text>
        <Switch value={includeUpper} onValueChange={setIncludeUpper} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Include number</Text>
        <Switch value={includeNumber} onValueChange={setIncludeNumber} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Include special symbol</Text>
        <Switch value={includeSymbol} onValueChange={setIncludeSymbol} />
      </View>
  
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.password}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23235B",
    padding: 20,
    borderRadius: 10,
    gap: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 10,
    borderColor: "#FFF",
    borderWidth: 1,
    color: "#FFFFFF",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    color: "#FFFFFF",
  },
  password: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  label :{
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3B3B98",
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
  }
});

