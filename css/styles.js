// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  validationMessage: {
    color: 'red', // Red text color for validation
    marginBottom: 10,
    textAlign:'left'
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  moviePoster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  tag: {
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius: 16,
    margin: 4,
    fontSize:20,
    height:30,
  },
  selectedTag: {
    backgroundColor: '#007BFF',
    color:"#fff",
    borderWidth: 0, 
  },
  unselectedTag: {
    color:"#000",
    backgroundColor:"#fff",
    borderWidth: 1, 
    borderColor: '#000',
  },
  tagText: {
    // color: '#fff',
  },
});

export default styles;
