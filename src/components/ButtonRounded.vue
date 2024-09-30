<template>
    <RouterLink :to="link">
        <div class="mt-2 mr-2 bg-white text-black rounded-xl py-2 px-8">{{ name }}
        </div>
    </RouterLink>
</template>
<script>
export default {
    name: 'ButtonRounded',
    props: {
        link: String,
        name: String
    }
}
</script>