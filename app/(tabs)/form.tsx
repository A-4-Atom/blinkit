import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

const Form = () => {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  return (
    <View className="flex-1 bg-background dark:bg-background-dark p-4">
      <Text className="text-xl font-inter-bold text-text dark:text-text-dark mb-4">Simple Form</Text>
      <TextInput
        placeholder="Type something..."
        value={value}
        onChangeText={setValue}
        className="px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text dark:text-text-dark border border-secondary"
      />
      <Pressable
        onPress={() => setSubmitted(value)}
        className="mt-4 px-4 py-3 rounded-md bg-primary dark:bg-primary-dark"
      >
        <Text className="text-text dark:text-text-dark font-inter">Submit</Text>
      </Pressable>
      {submitted !== null && (
        <Text className="mt-4 text-text dark:text-text-dark">You submitted: {submitted || "(empty)"}</Text>
      )}
    </View>
  );
};

export default Form;
