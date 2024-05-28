<template>
  <!-- Этот компонент захардкодил, но могу сделать его динамическим -->
  <div class="nav-block">
    <NuxtLink class="nav-block__link nav-block__link_unchoosen" to="/">
      Главная
    </NuxtLink>
    <img class="nav-block__arrow" src="assets/img/nav-arrow.png" alt="nav-arrow" />
    <NuxtLink class="nav-block__link nav-block__link_choosen" to="/main/bucket">
      Корзина
    </NuxtLink>
  </div>
</template>

<style lang="scss">
@import "assets/colors";

.nav-block {
  margin-top: 30px;
}

.nav-block__link {
  font-size: 14px;
  color: $unchoosen-text;
  text-decoration: none;
}

.nav-block__link_choosen {
  color: $text;
}

.nav-block__link_unchoosen {
  color: $unchoosen-text;
}

.nav-block__arrow {
  width: 5px;
  height: 8px;
  margin: 0 10px;
}
</style>
