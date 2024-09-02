import { defineComponent } from 'vue'
import logoUrl from '@/assets/vue.svg'

export default defineComponent({
  name: 'AppLogo',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <div class="h-60px flex cursor-pointer items-center justify-center gap-2 p-x-2 text-xl">
        <img src={logoUrl} alt="logo" class="h-8 w-8" />
        {!props.collapsed && <span class="of-hidden text-ellipsis ws-nowrap text-lg font-bold">Navie UI</span>}
      </div>
    )
  },
})
