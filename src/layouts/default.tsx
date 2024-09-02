import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider, NScrollbar } from 'naive-ui'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import AppMenu from '@/components/app/Menu'
import AppLogo from '@/components/app/Logo'
import AppHeader from '@/components/app/Header'
import { useAppStore } from '@/stores'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const appStore = useAppStore()

    const { collapsed } = storeToRefs(appStore)

    return () => (
      <NLayout
        has-sider
        embedded
        class="h-full w-full"
      >
        <NLayoutSider
          collapseMode="width"
          collapsedWidth={64}
          width={240}
          showTrigger="arrow-circle"
          contentClass="flex flex-col min-h-full"
          bordered
        >
          <AppLogo collapsed={collapsed.value} />
          <NScrollbar class="flex-1">
            <AppMenu collapsed={collapsed.value} />
          </NScrollbar>
        </NLayoutSider>

        <NLayout>
          <NLayoutHeader position="absolute" bordered>
            <AppHeader />
          </NLayoutHeader>
          <NLayoutContent nativeScrollbar={false} content-style={{ padding: '20px' }}>
            <RouterView />
          </NLayoutContent>
        </NLayout>
      </NLayout>
    )
  },
})
