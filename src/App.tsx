import { NConfigProvider } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <NConfigProvider class="h-full w-full" inline-theme-disabled>
        <RouterView />
      </NConfigProvider>
    )
  },
})
