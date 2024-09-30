<template>
    <div>
        <div>{{ first }}</div>
        <div>{{ animation }}</div>
        <div>{{ last }}</div>
    </div>
</template>
<script>
export default {
    name: 'TextRoller',
    props: {
        first: String,
        animation: Array,
        last: String
    }
}
</script>

<!-- https://freefrontend.com/css-text-animations/ -->