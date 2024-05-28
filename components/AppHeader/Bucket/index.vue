<template>
  <div class="mini-bucket">
    <img class="mini-bucket__logo" src="assets/img/bucket-logo.png" alt="bucket" />
    <div class="mini-bucket__data">
      <span class="mini-bucket__title">Ваша корзина</span>
      <span class="mini-bucket__count">{{ count }} товара</span>
      <span class="mini-bucket__price">{{ sum }}</span>
    </div>
  </div>
</template>

<script setup>
import { useBucketStore } from "../../../store/bucket";
import { computed } from "vue";

const bucket = useBucketStore();

const count = computed(() => bucket.count);

const sum = computed(() => bucket.sum);
</script>

<style lang="scss">
@import "assets/colors";

.mini-bucket {
  display: flex;
  align-items: center;
}

.mini-bucket__logo {
  margin-right: 10px;
  width: 32px;
  height: 32px;
}

.mini-bucket__data {
  display: flex;
  flex-direction: column;
}

.mini-bucket__count,
.mini-bucket__sum,
.mini-bucket__title {
  display: block;
}

.mini-bucket__title {
  font-size: 14px;
}

.mini-bucket__count,
.mini-bucket__sum {
  font-size: 12px;
}

.mini-bucket__count {
  font-size: 12px;
  color: $text;
}
</style>
