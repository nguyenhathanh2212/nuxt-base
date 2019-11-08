<template>
  <div>
    <!-- Blog entries -->
        <div class="w3-col l8 s12">
            <nuxt-child />
        </div>
        <!-- Introduction menu -->
        <div class="w3-col l4">
            <about-component></about-component>
            <hr>
            <popular-post-component></popular-post-component>
            <hr>
            <tag-component></tag-component>
            <!-- END Introduction Menu -->
        </div>
      <!-- END GRID -->
  </div>
</template>

<script>
    import Logo from '~/components/Logo.vue';
    import About from '@/components/home/About.vue';
    import PopularPost from '@/components/home/PopularPost.vue';
    import Tag from '@/components/home/Tag.vue';

    export default {
        components: {
            Logo,
            aboutComponent: About,
            popularPostComponent: PopularPost,
            tagComponent: Tag,
        },
        layout: 'master'
    }
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
