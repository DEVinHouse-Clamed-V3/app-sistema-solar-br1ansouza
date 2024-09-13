import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { posts } from './posts';  // Importando os posts do arquivo posts.js

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="auto" backgroundColor='#F56040' />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/social-media-marketing.png')}
        />
        <View>
          <Image
            source={require('./assets/cattalk.png')}
            style={{ width: 130, height: 35, borderRadius: 30 }}
          />
        </View>
        <MaterialCommunityIcons name='chat' size={30} color='#FFF' />
      </View>

      <ScrollView>
        {posts.map((post) => (
          <View key={post.id}>
            <View style={styles.headerPost}>
              <MaterialCommunityIcons name='check-decagram' size={20} color='#2196f3' />
              <Text style={styles.colorText}>{post.user}</Text>
              <MaterialCommunityIcons name='dots-horizontal' size={30} color='#a9a9a9' />
            </View>
            <Image
              style={styles.imagemPost}
              source={{ uri: post.image }}
            />
            <View style={styles.footerPost}>
              <TouchableOpacity>
                <MaterialCommunityIcons name='heart' size={30} color='#fd1d1d' />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name='chat' size={30} color='#CCC' />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name='share' size={30} color='#ffdc80' />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.bodyComment}>{post.likes} likes</Text>
            </View>
            <View>
              <Text style={[styles.bodyComment, { fontWeight: 'bold', paddingBottom: 1 }]}>
                {post.user}: {post.caption}
              </Text>
            </View>
            <View>
              <Text style={[styles.bodyComment, { paddingBottom: 10 }]}>
                Ver todos os comentários...
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1d1d1d',
  },
  logo: {
    width: 40,
    height: 40,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1,
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imagemPost: {
    width: '94%',
    height: 330,
    borderRadius: 10,
    alignSelf: 'center',
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  colorText: {
    color: '#CCC',
    fontSize: 16,
  },
  bodyComment: {
    paddingHorizontal: 6,
    color: '#CCC',
    fontSize: 12,
  },
});
