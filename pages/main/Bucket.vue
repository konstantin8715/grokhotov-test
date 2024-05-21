<template>
  <div>{{ store.items[0] }}</div>
</template>

<script>
import { useBucketStore } from "../../store/bucket";

export default {
  data() {
    return {
      store: useBucketStore(),
    };
  },
};
</script>
