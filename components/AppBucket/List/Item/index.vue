<template>
  <div class="list-item">
    <img
      class="list-item__img"
      :src="'assets/img/' + product.img"
      :alt="product.img"
    />
    <div class="list-item__data">
      <span class="list-item__title">{{ product.title }}</span>
      <span class="list-item__discription">{{ product.description }}</span>
      <span class="list-item__article">{{ product.article }}</span>
    </div>
    <UICounter />
    <div class="list-item__sum">
      <span>{{ sum }}</span>
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
console.log(props.product.img);
const sum = computed(() => props.product.price * props.product.count);
</script>

<style land="scss">
.list-item {
  border: 2px solid blue;
}
</style>
