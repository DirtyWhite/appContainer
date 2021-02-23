import { defineComponent } from "vue";
import app from './styles/app.module.scss'
import Topbar from './components/topbar.vue'
import { JSX } from "./utils/renderUtil";
export const App = defineComponent({
  name: 'App',
  components: { Topbar },
  setup: () => {

    return JSX(() => <div class={app.root}>
      <Topbar></Topbar>
    </div>)
  }
})