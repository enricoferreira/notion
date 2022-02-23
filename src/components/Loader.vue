<template>
    <v-overlay app :value="$store.state.loader">
        <v-progress-circular :size="70" :width="7" color="white" indeterminate></v-progress-circular>
    </v-overlay>
</template>

<script>
export default {
}
</script>

<style>

</style>