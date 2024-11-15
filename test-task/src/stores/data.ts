import { defineStore } from "pinia";
import { ref } from "vue";

import physiciansMocks from "@/mocks/physicians.json";
import nursesMocks from "@/mocks/nurses.json";
import type { INurse, IPhysician } from "@/types/user";

export const useDataStore = defineStore("dataStore", () => {
  const physicians = ref<Array<IPhysician> | null>(
    physiciansMocks as IPhysician[],
  );
  const nurses = ref<Array<INurse> | null>(nursesMocks as INurse[]);

  const addPhysician = (physician: IPhysician) => {
    if (!physicians.value) {
      physicians.value = [physician];
      return;
    }
    physicians.value = [...physicians.value, physician];
  };

  const updatePhysicians = (physician: IPhysician) => {
    if (!physicians.value) {
      return;
    }

    const index = physicians.value.findIndex(({ id }) => id === physician.id);
    if (!index) {
      return;
    }

    physicians.value = [
      ...physicians.value.slice(0, index),
      physician,
      ...physicians.value.slice(index + 1),
    ];
  };

  const removePhysician = (idToDelete: string) => {
    if (!physicians.value) {
      return;
    }
    physicians.value = physicians.value.filter(({ id }) => id !== idToDelete);
  };

  const addNurse = (nurse: INurse) => {
    if (!nurses.value) {
      nurses.value = [nurse];
      return;
    }
    nurses.value = [...nurses.value, nurse];
  };

  const updateNurses = (nurse: INurse) => {
    if (!nurses.value) {
      return;
    }

    const index = nurses.value.findIndex(({ id }) => id === nurse.id);
    if (!index) {
      return;
    }

    nurses.value = [
      ...nurses.value.slice(0, index),
      nurse,
      ...nurses.value.slice(index + 1),
    ];
  };

  const removeNurses = (idToDelete: string) => {
    if (!nurses.value) {
      return;
    }
    nurses.value = nurses.value.filter(({ id }) => id !== idToDelete);
  };

  return {
    physicians,
    nurses,
    addNurse,
    updateNurses,
    removeNurses,
    addPhysician,
    updatePhysicians,
    removePhysician,
  };
});
