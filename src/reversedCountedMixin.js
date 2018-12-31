export const reversedCountedMixin = {
    data() {
        return {
            mixinText: '',
        };
    },
    computed: {
        mixinReversedCounted() {
            return this.mixinText.split("").reverse().join("") + " (" + this.mixinText.length + ")";
        },
    },
    created() {
        console.log('My custom mixin is here!!! <<<<<');
    },
};