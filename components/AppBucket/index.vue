<template>
  <div class="bucket">
    <AppBucketList :products="products" />
    <AppBucketTotal
      :sum="sum"
      :count="count"
      :installation="installation"
    />
  </div>
</template>

<script setup>
import { useBucketStore } from "../../store/bucket";

const bucket = useBucketStore();

const products = computed(() => bucket.products);

const sum = computed(() => bucket.sum);

const count = computed(() => bucket.count);

const installation = computed(() => bucket.installation);
</script>

<style lang="scss">
.bucket {
  display: flex;
  align-items: center;
  margin-top: 60px;
  justify-content: space-between;
}
</style>
