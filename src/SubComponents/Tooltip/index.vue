<template>
    <b-button v-b-tooltip.hover :title="tooltipContent">{{ buttonName }}</b-button>
</template>
<script>
export default {
    props: {
        buttonName: {
            type: String,
            required: true
        },
        tooltipContent: {
            type: String,
            required: true
        }
    }
}
</script>