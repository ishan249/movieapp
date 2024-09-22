import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    paddingHorizontal:18,
    paddingVertical:4,
    backgroundColor: '#14181c',
    fontFamily: 'Inter-Regular', // Inter font applied
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    borderRadius: 5,
    color:"#fff",
    fontFamily: 'Inter-Regular', // Inter font applied
  },
  labels:{
    fontWeight:"semibold",
    fontFamily: 'Inter-Semibold', // Inter font applied
    color:"#fff"
  },
  categoryTitle:{
    fontWeight:"medium",
    fontFamily: 'Inter-Semibold', // Inter font applied
    color:"#fff",
    marginVertical:6
  },
  tagContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00ac1c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inter-Regular', // Inter Bold for buttons
  },
  validationMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
    fontFamily: 'Inter-Regular', // Inter font for validation messages
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    fontFamily: 'Inter-Bold', // Inter Bold for movie titles
  },
  moviePoster: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  tag: {
    paddingHorizontal: 10, // Add padding for horizontal spacing
    paddingVertical: 4,
    borderRadius: 16,
    margin: 4,
    fontSize: 20,
    height: 30,
    minWidth: 50, // Optional: Set a minimum width to avoid tags being too small
    alignSelf: 'flex-start', // Ensure tags only take as much width as needed
    fontFamily: 'Inter-Regular',
  },
  selectedTag: {
    backgroundColor: '#0066b2',
    color: '#fff',
    borderWidth: 0,
    fontFamily: 'Inter-Regular', // Inter font for tags

  },
  unselectedTag: {
    color: '#fff',
    backgroundColor: '#14181c',
    borderWidth: 1,
    borderColor: '#fff',
    fontFamily: 'Inter-Regular', // Inter font for tags

  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter-Regular', // Assuming you're using Inter font
  },
});

export default styles;
