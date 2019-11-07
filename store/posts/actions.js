import * as types from './mutation-types.js';
import { postsCollection } from '~/plugins/firebase.js'

const setPosts = ({ commit }) => {
    return new Promise((resolve, reject) => {
        postsCollection.orderBy('created_at').onSnapshot((snapshot) => {
            var posts = [];
            snapshot.forEach((doc) => {
                posts.push({
                    _id: doc.id,
                })
            });
            commit(types.SET_POSTS, posts);
            resolve(posts);
        }, error => {
            reject(error);
        });
    })
}

export default {
    setPosts
}
