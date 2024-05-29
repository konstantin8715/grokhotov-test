<template>
  <div class="total">
    <div class="total__content">
      <span class="total__title">Итого</span>

      <div class="total__data total__data-sum">
        <span class="total__data-title">Сумма заказа</span>
        <span class="total__data-value">{{ sum }}</span>
      </div>

      <div class="total__data">
        <span class="total__data-title">Количество</span>
        <span class="total__data-value">{{ count }}</span>
      </div>

      <div class="total__data">
        <span class="total__data-title">Установка</span>
        <span class="total__data-value">{{ installation }}</span>
      </div>

      <hr class="total__divider" />

      <div class="total__data total__price">
        <span class="total__price-title">Стоимость товаров</span>
        <span class="total__price-value">{{ sum }}</span>
      </div>

      <button class="total__refund"></button>
      <button class="total__buy"></button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sum: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  installation: {
    type: Boolean,
    required: true,
  },
});

const sum = computed(() => props.sum);

const count = computed(() => props.count);

const installation = computed(() => props.installation);
</script>

<style scoped lang="scss">
@import "assets/colors";

.total {
  width: 425px;
  height: 458px;
  background: $block;
}

.total__content {
  display: flex;
  flex-direction: column;
  padding: 35px;
}

.total__title {
  font-weight: 600;
  font-size: 24px;
  color: $primary-text;
}

.total__data {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
}

.total__data-sum {
  margin-top: 31px;
}

.total__data-title, .total__data-value {
  color: $primary-text;
  font-size: 16px;
}

.total__data-title {
  font-weight: 500;
}

.total__data-value {
  font-weight: 400;
}

.total__divider {
  margin-top: 28px;
}

.total__price {
  margin-top: 10px;
}

.total__price-title {
  font-size: 18px;
  font-weight: 600;
}

.total__price-value {
  font-size: 26px;
  font-weight: 700;
}

.total__refund {
  margin-top: 30px;
}

.total__buy {
  margin-top: 12px;
}

button {
  background: $primary-btn;
  border: none;
  border-radius: 4px;
  width: 365px;
  height: 54px;
}
</style>
