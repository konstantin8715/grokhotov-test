import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      picture: "",
      title: "BXC",
      discription: "Вытяжное устройство для механической системы вентиляции",
      minPrice: 6848,
      maxPrice: 56584,
    },
    {
      picture: "",
      title: "G2H",
      discription:
        "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
      minPrice: 6848,
      maxPrice: 56584,
    },
    {
      picture: "",
      title: "GHN",
      discription: "Вытяжное устройство с датчиком присутствия",
      minPrice: 6848,
      maxPrice: 56584,
    },
    {
      picture: "",
      title: "TDA",
      discription: "Вытяжное устройство с датчиком присутствия",
      minPrice: 6848,
      maxPrice: 56584,
    },
  ]);

  return { products };
});
