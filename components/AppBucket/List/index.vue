<template>
  <div class="product-list">
    <div class="product-list__header">
      <div class="product-list__header-data">
        <h1 class="product-list__title">Ваша корзина</h1>
        <span class="product-list__count">{{ products.length }} товара</span>
      </div>
      <button class="product-list__clear">Очистить корзину</button>
    </div>

    <div class="product-list__list">
      <AppBucketListItem v-for="p in products" :product="p" />
    </div>

    <div class="product-list__installation">
      <input class="product-list__installation-checkbox" type="checkbox" />
      <img
        src="assets/img/installation.png"
        alt="installation"
        class="product-list__installation-img"
      />
      <div class="product-list__installation-data">
        <span class="product-list__installation-discription">Установка</span>
        <span class="product-list__installation-title">
          Отметьте, если Вам необходима консультация профессионала по монтажу
          выбранных товаров.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
@import "assets/colors";

.product-list__header {
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
  // align-items: center;
  height: 53px;
}

.product-list__header-data {
  display: flex;
  align-items: flex-end;
}

.product-list__title {
  font-size: 44px;
  font-weight: 700;
  display: block;
}

.product-list__count {
  margin-left: 22px;
  padding-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  color: $text;
}

.product-list__clear {
  border: none;
  text-decoration: underline;
  background-color: white;
  font-size: 14px;
  font-weight: 400;
  padding-top: 10px;
  color: $text;
  cursor: pointer;
}

.product-list__list {
  border: 2px solid red;
  margin-top: 50px;
}
</style>
