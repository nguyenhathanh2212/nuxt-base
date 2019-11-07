import Vuex from 'vuex';
import posts from './posts';

const store = () => new Vuex.Store({
    modules: {
        posts
    }
});

export default store;
