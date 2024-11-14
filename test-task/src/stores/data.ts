import { defineStore } from "pinia";
import { ref } from "vue";

import physiciansMocks from "@/mocks/physicians.json";
import nursesMocks from "@/mocks/nurses.json";
import type { INurse, IPhysician } from "@/types/user";

export const useDataStore = defineStore("dataStore", () => {
  const physicians = ref<Array<IPhysician> | null>(physiciansMocks);
  const nurses = ref<Array<INurse> | null>(nursesMocks);

  const updatePhysicians = (data: Array<IPhysician> | null) => {
    physicians.value = data;
  };

  const updateNurses = (data: Array<INurse> | null) => {
    nurses.value = data;
  };

  return {
    physicians,
    nurses,
    updatePhysicians,
    updateNurses,
  };
});
