<template>
  <div class="home">
    <h1 class="text-2xl font-bold"></h1>
    <Controls />
    <ProfileCompletion class="mt-16" :complete="percentageComplete" :radius="58" :stroke="8"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileCompletion from "@/components/ProfileCompletion.vue";
import Controls from "@/components/Controls.vue";

export default {

  components: {
    ProfileCompletion,
    Controls,
  },
  computed: {
    ...mapGetters({
      percentageComplete: "getCompleteness",
    }),
  },
};
</script>
