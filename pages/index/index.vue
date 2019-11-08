<template>
    <div>
        <div v-for="(post, index) in posts" :key="index">
            <post-item-component :post="post"></post-item-component>
            <hr>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import PostItem from '@/components/home/PostItem.vue';

    export default {
        components: {
            postItemComponent: PostItem,
        },
        computed: {
            ...mapState('posts', ['posts']),
            
        },
        fetch(context) {
            return context.store.dispatch('posts/setPosts').catch((err) => {
                console.log(err);
            });
        }
    }
</script>
