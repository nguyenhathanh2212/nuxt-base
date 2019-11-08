<template>
    <div>
        <detail-component></detail-component>
    </div>
</template>

<script>
    import Detail from '@/components/home/Detail.vue';

    export default {
        components: {
            detailComponent: Detail,
        },
        fetch(context) {
            return context.store.dispatch('posts/setPost', context.route.params.id).catch((err) => {
                console.log(err);
            });
        }
    }
</script>
