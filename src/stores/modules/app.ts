import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    collapsed: false,
    colorMode: 'light',
  }),
  persist: true,
})
