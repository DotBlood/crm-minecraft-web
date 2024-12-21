import { defineStore } from "pinia";

export const useMyGlobalStore = defineStore({
  id: "myGlobalStore",
  state: () => ({
    count: 0,
    test: 0,
  }),
  actions: {
    setNewCount(newCount: number) {
      this.count = newCount;
    },
    setNewTest(newTest: number) {
      this.test = newTest;
    },
  },
});
