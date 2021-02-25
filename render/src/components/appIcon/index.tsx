import { computed, defineComponent, getCurrentInstance } from "vue";
import { appConfig } from "../../config/menu";
import { JSX } from "../../utils/renderUtil";

import type Electron from 'electron';
const remote: Electron.Remote = require('electron').remote;

export default defineComponent({
  name: "icon",
  props: {
    appKey: String
  },
  setup({ appKey }) {
    const config = computed(() => {
      return appConfig.find(el => el.key === appKey)
    })
    const instance = getCurrentInstance();

    return JSX(() => {
      return <div class="iconWrap"
        onClick={() => {
          instance.emit('click', appKey)
        }}
      >
        <div class="icon">{config.value.icon}</div>
        <div class="title">{config.value.title}</div>
      </div>;
    });
  },
});