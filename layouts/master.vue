<template>
    <div>
        <div class="w3-content" style="max-width:1400px">
            <header-component></header-component>
            <!-- Grid -->
            <div class="w3-row">
            <nuxt />
            </div><br>
            <!-- END w3-content -->
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Header from '@/components/templates/Header.vue';
    import Footer from '@/components/templates/Footer.vue';

    export default {
        components: {
            headerComponent: Header,
            footerComponent: Footer,
        }
    }
</script>

<style scoped>
    body,
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: "Raleway", sans-serif
    }
</style>
