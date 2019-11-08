import { required } from 'vuelidate/lib/validators';
<template>
    <!-- Blog entry -->
    <div class="w3-card-4 w3-margin w3-white" v-if="post">
        <nuxt-link :to="{ name: 'index-id', params: { id: post._id }}">
            <img :src="post.image" alt="Nature" class="img-thumbnail image-post">
        </nuxt-link>
        <div class="w3-container">
            <h3>
                <nuxt-link :to="{ name: 'index-id', params: { id: post._id }}"><b>{{ post.title }}</b></nuxt-link>
            </h3>
            <h5>{{ post.title_description }}, <span class="w3-opacity">April 7, 2014</span></h5>
        </div>
        <div class="w3-container">
            <p>
                {{ post.description }}
            </p>
            <div class="w3-row">
                <div class="w3-col m8 s12">
                    <p>
                        <nuxt-link tag="button" :to="{ name: 'index-id', params: { id: post._id }}" class="w3-button w3-padding-large w3-white w3-border">
                            <b>READ MORE <span class="w3-tag view-count"><span class="fa fa-eye"></span> {{ post.view_count }}</span></b>
                        </nuxt-link>
                    </p>
                </div>
                <div class="w3-col m4 w3-hide-small">
                    <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                required: true,
                type: Object,
            }
        }
    }
</script>

<style scoped>
    .view-count {
        font-weight: 400;
    }

    .image-post {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
    }
</style>
