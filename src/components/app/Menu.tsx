import type { MenuOption } from 'naive-ui'
import { NMenu } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppMenu',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const menuOptions: MenuOption[] = [
      {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
      },
      {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        children: [
          {
            label: '鼠',
            key: 'rat',
          },
        ],
      },
    ]

    return () => (
      <NMenu
        options={menuOptions}
        collapsed={props.collapsed}
        indent={20}
        collapsedWidth={64}
      />
    )
  },
})
