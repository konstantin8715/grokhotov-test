import { defineStore } from "pinia";

export const useBucketStore = defineStore("bucket", () => {
  const products = ref([
    {
      id: 1,
      img: "g2h.png",
      title: "Вытяжное устройство G2H",
      discription:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
    },
    {
      id: 2,
      img: "bxc.png",
      title: "Вытяжное устройство BXC",
      discription:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "Артикул: G2H1065",
      count: 2,
      price: 12644,
    },
    {
      id: 3,
      img: "ghn.png",
      title: "Вытяжное устройство GHN",
      discription:
        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
      article: "Артикул: G2H1065",
      count: 1,
      price: 12644,
    },
  ]);

  const installation = ref(false);

  const sum = computed(() =>
    products.value.reduce((sum, i) => (sum += i.count * i.price), 0)
  );

  const count = computed(() =>
    products.value.reduce((count, i) => (count += i.count), 0)
  );

  return { products, installation, sum, count };
});
