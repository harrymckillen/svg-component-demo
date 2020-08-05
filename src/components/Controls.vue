<template>
  <div class="text-center p-3">
    <button class="w-8 border-solid border-2 border-gray-700 bg-red-700 rounded" :disabled="percentageComplete <= 0" @click="decrementCount(amount)">-</button>
    <select class="p-1 w-16 mx-2" name="amount" v-model="amount">
      <option value="5">5%</option>
      <option value="10">10%</option>
      <option value="15">15%</option>
      <option value="20">20%</option>
      <option value="25">25%</option>
    </select>
    <button class="w-8 border-solid border-2 border-gray-700 bg-green-700 rounded" :disabled="percentageComplete >= 100" @click="incrementCount(amount)">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      amount: 10,
    };
  },
  computed: {
    ...mapGetters({
      percentageComplete: "getCompleteness",
    }),
  },
  methods: {
    ...mapActions({
      incrementCount: "incrementCount",
      decrementCount: "decrementCount",
    }),
  },
};
</script>

<style>
</style>
