import * as types from './mutation-types.js';
import { postsCollection } from '~/plugins/firebase.js'

const setPosts = ({ commit }) => {
    return new Promise((resolve, reject) => {
        postsCollection.orderBy('created_at').onSnapshot((snapshot) => {
            var posts = [];
            snapshot.forEach((doc) => {
                let post = doc.data();
                post._id = doc.id;
                posts.push(post);
            });
            commit(types.SET_POSTS, posts);
            resolve(posts);
        }, error => {
            reject(error);
        });
    })
}

const setPost = ({ commit }, _id) => {
    return new Promise((resolve, reject) => {
        postsCollection.doc(_id).get()
        .then(snapshot => {
            commit(types.SET_POST, snapshot.data());
            resolve(snapshot.data());
        }).catch(error => {
            reject(error);
        });
    })
}

export default {
    setPosts,
    setPost
}
