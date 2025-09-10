
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios'

type Post ={
  title: string,
  body:string
};

const App = () => {
  const [post, setPost] = useState<Post | null>(null);


useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(Response => setPost(Response.data));
}, []);

if(!post) {
  return <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
}

return (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.body}>{post.body}</Text>
  </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex:1 , justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  body : {
    fontSize: 10
  }
})

export default App;
