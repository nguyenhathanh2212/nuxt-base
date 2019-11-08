import { required } from 'vuelidate/lib/validators';
<template>
    <!-- Blog entry -->
    <div class="w3-card-4 w3-margin w3-white" v-if="post">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><nuxt-link :to="{ name: 'index' }">Home</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ post.title }}</li>
            </ol>
        </nav>
        <img :src="post.image" alt="Nature" class="img-thumbnail" style="width:100%">
        <div class="w3-container">
            <h3><b>{{ post.title }}</b></h3>
            <h5>{{ post.title_description }}, <span class="w3-opacity">April 7, 2014</span></h5>
        </div>
        <div class="w3-container">
            <div class="w3-row">
                <div class="w3-col m8 s12">
                    <p>
                        {{ post.description }}
                    </p>
                </div>
                <div class="w3-col m4 w3-hide-small">
                    <p>
                        <span class="w3-padding-large w3-right"><span class="w3-tag view-count"><span class="fa fa-eye"></span> {{ post.view_count }}</span>
                        <span class="w3-tag"><span class="fa fa-comments"></span> 0</span></span>
                    </p>
                </div>
            </div>
            <hr>
            <div class="w3-row">
                <p>
                    {{ post.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('posts', ['post'])
        }
    }
</script>

<style scoped>
    .breadcrumb {
        margin-bottom: 0px;
    }
</style>
