import { defineComponent, ref } from "vue";
import appIcon from "./components/appIcon/index.vue";
import topbar from "./components/topbar/index.vue";
import { appConfig } from "./config/menu";
import './styles/app.scss'
import { JSX } from "./utils/renderUtil";
export const App = defineComponent({
  name: 'App',
  components: { appIcon, topbar },
  setup: () => {
    return JSX(() => <div class="root">

      <div class="apps" >
        {appConfig.map(el => <appIcon appKey={el.key}></appIcon>)}
      </div>
    </div>)
  }
})