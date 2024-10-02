import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "../css/styles"; // Your styles file

const MovieListScreen = ({ route }) => {
  const { movies } = route.params; // Get movie data from route params

  // Function to render each movie item as a card
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={{ uri: item.poster }} style={styles.moviePoster} />
      <View style={styles.movieContent}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieGenre}>{item.genre.join(", ")}</Text>
        <Text style={styles.moviePlot}>{item.plot}</Text>

        <View style={styles.movieDetailsRow}>
          <Text style={styles.movieDetailLabel}>Rating:</Text>
          <Text style={styles.movieDetailValue}>{item.rating}</Text>
        </View>

        <View style={styles.movieDetailsRow}>
          <Text style={styles.movieDetailLabel}>Runtime:</Text>
          <Text style={styles.movieDetailValue}>{item.runtime} min</Text>
        </View>

        <View style={styles.movieDetailsRow}>
          <Text style={styles.movieDetailLabel}>Director:</Text>
          <Text style={styles.movieDetailValue}>{item.director}</Text>
        </View>

        <View style={styles.movieDetailsRow}>
          <Text style={styles.movieDetailLabel}>Year:</Text>
          <Text style={styles.movieDetailValue}>{item.year}</Text>
        </View>

        <TouchableOpacity
          style={styles.movieLinkButton}
          onPress={() => Linking.openURL(item.website)}
        >
          <Text style={styles.movieLinkButtonText}>Visit Website</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.movieListContainer}
      />
    </View>
  );
};

export default MovieListScreen;
