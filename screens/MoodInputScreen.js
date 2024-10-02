import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "../css/styles"; // Assuming your styles file
import { genreData } from "../helper/constants/genre";
import { useNavigation } from "@react-navigation/native";
const MoodInputScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState([]);

  const navigation = useNavigation();
  // Object with emojis and tag names
  const tagsWithEmojis = [
    { name: "Happy", emoji: "😊" },
    { name: "Sad", emoji: "😢" },
    { name: "Anxious", emoji: "😟" },
    { name: "Excited", emoji: "🤩" },
    { name: "Relaxed", emoji: "😌" },
  ];

  const onSubmit = async (data) => {
    console.log(data.mood, "se", selectedTags);
    setLoading(true);

    try {
      const response = await fetch(
        `${
          process.env.EXPO_PUBLIC_API_URL
        }/movies?limit=5?genre=${selectedTags.join(",")}&sort=title&order=asc`
      );

      const movieData = await response.json();
      console.log(movieData);
      setLoading(false);

      // Navigate to MovieListScreen and pass the movie data
      navigation.navigate("MovieListScreen", { movies: movieData });
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  const toggleTag = (tagName) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((t) => t !== tagName)); // Remove tag if already selected
    } else {
      setSelectedTags([...selectedTags, tagName]); // Add tag if not selected
    }
  };

  const renderCategory = (categoryName, data) => (
    <React.Fragment key={categoryName}>
      <Text style={styles.categoryTitle}>{categoryName}</Text>
      <View style={styles.tagContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.tag,
              selectedTags.includes(item.name)
                ? styles.selectedTag
                : styles.unselectedTag,
            ]}
            onPress={() => toggleTag(item.name)}
          >
            <Text style={{ color: "white" }}>
              {item.emoji} {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </React.Fragment>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={[styles.labels, { fontSize: 18 }]}>Describe</Text>

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
              placeholderTextColor={"#ccc"}
              style={styles.input}
            />
          )}
        />

        {/* Show validation error message */}
        {errors.mood && (
          <Text style={styles.validationMessage}>{errors.mood.message}</Text>
        )}

        {/* OR Section */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <Text style={[styles.labels, { fontSize: 18 }]}>Select Genre</Text>

        {Object.entries(genreData).map(([categoryName, data]) =>
          renderCategory(categoryName, data)
        )}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoodInputScreen;
