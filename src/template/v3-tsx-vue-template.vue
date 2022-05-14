<script>
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: '$1',
    setup(props, { emit, expose, slots, attrs }) {
        return () => <div class='container'>this is $1</div>;
    }
});
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>

