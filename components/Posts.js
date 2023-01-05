import React from "react";
import { StyleSheet, View, Image } from "react-native"

class Posts extends React.Component {
    render() {
        const { postImg } = this.props.product;
        return (
            <View style={styles.container}>
                <Image source={{ uri: postImg }} style={{ height: 150, width: 130 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 1,
        marginVertical: 1
    }
})
export default Posts;