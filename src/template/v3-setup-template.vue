<template>
    <div class="container">this is $1</div>
</template>

<script lang="ts">
export default {
    name: '$1'
};
</script>
<script lang="ts" setup>
import { defineProps, defineEmits, defineExpose, withDefaults, useSlots, useAttrs } from 'vue';

const changeItem = () => {
    emit('change', 1);
};
const deleteItem = () => {
    emit('update', 'test');
};

/**
 * define props
 */
interface Props {
    msg?: string;
    labels?: string[];
}
const props = withDefaults(defineProps<Props>(), {
    msg: 'this is msg',
    labels: () => ['one', 'two']
});

/**
 * define emits
 */
const emit = defineEmits<{
    (e: 'change', id: number): void;
    (e: 'update', value: string): void;
}>();

/**
 * define expose props
 */
defineExpose({
    labels: props.labels,
    changeItem,
    deleteItem
});

/**
 * get slots
 */
const slots = useSlots();

/**
 * get attrs
 */
const attrs = useAttrs();
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>

