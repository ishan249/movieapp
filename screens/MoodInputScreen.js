import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "../css/styles"; // Assuming your styles file

const MoodInputScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ["Happy", "Sad", "Anxious", "Excited", "Relaxed"];
  const onSubmit = (data) => {
    console.log(data.mood, "se", selectedTags);
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag)); // Remove tag if already selected
    } else {
      setSelectedTags([...selectedTags, tag]); // Add tag if not selected
    }
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="mood"
        rules={{ required: `Please enter how you're feeling.` }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="How are you feeling today?"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
      />

      {/* Show validation error message */}
      {errors.mood && (
        <Text style={styles.validationMessage}>{errors.mood.message}</Text>
      )}

      <FlatList
        data={tags}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tag,
              selectedTags.includes(item)
                ? styles.selectedTag
                : styles.unselectedTag,
            ]}
            onPress={() => toggleTag(item)}
          >
            <Text
              style={{
                color: selectedTags.includes(item) ? "white" : "black", // Conditional text color
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoodInputScreen;
