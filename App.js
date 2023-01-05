import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import Posts from './components/Posts'

export default function App() {

  const DATA = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  const StaticImage = "https://i.pinimg.com/564x/b3/2b/3d/b32b3d9b097426cf427cbc057dc022a7.jpg"

  const postitem = [
    {
      postImg: StaticImage
    },
    {
      postImg: "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg"
    },
    {
      postImg: StaticImage
    },
    {
      postImg: "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg"
    },
    {
      postImg: StaticImage
    }, {
      postImg: "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg"
    },
    {
      postImg: StaticImage
    },
    {
      postImg: "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg"
    },
    {
      postImg: StaticImage
    },
    {
      postImg: StaticImage
    }
  ]

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/null/external-left-arrow-arrows-dreamstale-lineal-dreamstale-15.png" }} style={{ height: 25, width: 26 }} />
        <Text>{DATA.name}</Text>
        <Text></Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg" }}
          style={styles.image}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{DATA.name}</Text>
          <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/48/0095f6/instagram-check-mark.png" }} style={{ height: 25, width: 25, }} />
          <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/null/ellipsis.png" }} style={{ height: 25, width: 25, marginHorizontal: 12 }} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 115, bottom: 20, }}>
        <View style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </View>
        <View style={styles.messageBtn}>
          <Text style={styles.msgText}>Message</Text>
        </View>
        <View style={styles.useraddBtn}>
          <Image source={{ uri: "https://img.icons8.com/external-those-icons-lineal-those-icons/24/null/external-Add-users-those-icons-lineal-those-icons.png" }} style={{ height: 20, width: 20, marginHorizontal: 8 }} />

        </View>
      </View>

      <View>
        <Text style={{ fontWeight: '600', marginHorizontal: 12 }}>{DATA.username}</Text>
        <Text style={{ marginHorizontal: 12 }}>{DATA.email}</Text>
        <Text style={{ marginHorizontal: 12, fontWeight: 'bold' }}>Followed by {DATA.company.name}</Text>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 2, borderBottomColor: '#EFEFEF', borderTopWidth: 2, borderTopColor: '#EFEFEF', marginTop: 20, height: 55 }}>
        <View style={{ alignItems: 'center', marginVertical: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>1,200</Text>
          <Text>Posts</Text>
        </View>

        <View style={{ alignItems: 'center', marginVertical: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>120M</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: 'center', marginVertical: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>100</Text>
          <Text>Following</Text>
        </View>
      </View>



      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 12, }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: "https://img.icons8.com/ios/50/0095f6/activity-grid--v1.png" }} style={{ height: 30, width: 30 }} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: "https://img.icons8.com/ios-filled/50/737373/instagram-reel.png" }} style={{ height: 30, width: 30 }} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: "https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/null/external-following-social-media-interface-anggara-basic-outline-anggara-putra.png" }} style={{ height: 27, width: 27 }} />

        </View>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={3}
          data={postitem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (<Posts product={item} />)}></FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 20
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 6
  },
  followButton: {
    height: 38,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#0095F6',
  },
  followText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  messageBtn: {
    marginHorizontal: 12,
    height: 38,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: '#EFEFEF',
  },
  msgText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  useraddBtn: {
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    borderRadius: 7,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  }

});
