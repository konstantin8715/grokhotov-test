<template>
  <div class="list-item">
    <img
      class="list-item__img"
      :src="`/img/${product.img}`"
      :alt="product.img"
    />
    <div class="list-item__data">
      <span class="list-item__title">{{ product.title }}</span>
      <span class="list-item__discription">{{ product.discription }}</span>
      <span class="list-item__article">{{ product.article }}</span>
    </div>
    <UICounter class="list-item__counter" />
    <div class="list-item__sum">
      <span>{{ sum }}</span>
    </div>
    <div class="list-item__close-btn">
      <Icon name="radix-icons:cross-1" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const sum = computed(() => props.product.price * props.product.count);
</script>

<style lang="scss">
@import "assets/colors";

.list-item {
  border: 1px solid blue;
  display: flex;
  height: 121px;
  // width: 800px;
  margin-top: 25px;
}

.list-item:first-child {
  margin-top: 0;
}

.list-item__img {
  width: 100px;
  height: 100px;
  padding-left: 15px;
}

.list-item__data {
  display: flex;
  flex-direction: column;
  margin-left: 31px;
  width: 263px;
}

.list-item__title {
  font-size: 16px;
  color: $primary-text;
  font-weight: 600;
  line-height: 23px;
}

.list-item__discription {
  color: $discription-text;
  font-size: 12px;
  font-weight: 400;
  margin-top: 6px;
}

.list-item__article {
  color: $text;
  font-weight: 400;
  font-size: 14px;
  margin-top: 6px;
}

.list-item__sum {
  font-weight: 500;
  font-size: 18px;
}

.list-item__counter, .list-item__sum {
  margin-top: 30px;
  margin-left: 80px;
}

.list-item__close-btn {
  margin-left: 35px;
}
</style>
