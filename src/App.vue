<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <p> Build a local Filter which reverses the Text it is applied on </p>
                <!-- Exercise 2 -->
                <p> Build a global Filter which counts the length of a word and appends it </p>
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <input v-model="toBeFiltered" />
                <div>{{ toBeFiltered | reversedText | wordCount }}</div>
                <hr />

                <!-- Exercise 3 -->
                <p> Do the same as in Exercises 1 &amp; 2, now with Computed Properties </p>
                <input v-model="toBeComputed" />
                <div>{{ computedReversedCounted }}</div>
                <hr />

                <!-- Exercise 4 -->
                <p> Share the Computed Property rebuilding Exercise 2 via a Mixin </p>
                <input v-model="mixinText" />
                <div>{{ mixinReversedCounted }}</div>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
    import { reversedCountedMixin } from './reversedCountedMixin.js';

    export default {
        data() {
            return {
                toBeFiltered: '',
                toBeComputed: '',
            };
        },
        mixins: [
            reversedCountedMixin,
        ],
        filters: {
            reversedText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            computedReversedCounted() {
                const cont =0;
                return this.toBeComputed.split("").reverse().join("") + " (" +this.toBeComputed.length + ")";
            },
        },
    }
</script>

<style>
</style>
