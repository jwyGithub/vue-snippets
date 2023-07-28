<template>
    <div></div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';

const _this = getCurrentInstance().proxy;

const props = defineProps();

const emits = defineEmits();

const exposed = defineExpose();
</script>

<style scoped lang="scss"></style>

