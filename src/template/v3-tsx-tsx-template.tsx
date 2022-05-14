import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: '$1',
    setup(props, { emit, expose, slots, attrs }) {
        return () => <>this is $1</>;
    }
});

