import * as types from './mutation-types.js';

export default {
    [types.SET_POSTS](state, posts) {
        state.posts = posts;
    },
    [types.SET_POST](state, post) {
        state.post = post;
    }
}
