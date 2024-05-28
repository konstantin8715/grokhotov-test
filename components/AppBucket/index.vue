<template>
  <div class="bucket">
    <AppBucketList :products="products" />
    <AppBucketTotal />
  </div>
</template>

<script setup>
import { useBucketStore } from "../../store/bucket";

const bucket = useBucketStore();
// console.log(bucket.products);
const products = computed(() => bucket.products);
</script>

<style lang="scss">
.bucket {
  display: flex;
  align-items: center;
  margin-top: 60px;
}
</style>
