import { defineComponent, ref, watchEffect } from "vue";
import appIcon from "./components/appIcon/index.vue";
import topbar from "./components/topbar/index.vue";
import subPage from "./components/subPage/index.vue";
import { appConfig } from "./config/menu";
import './styles/app.scss'
import { JSX } from "./utils/renderUtil";
export const App = defineComponent({
  name: 'App',
  components: { appIcon, topbar, subPage },
  setup: () => {
    const url = ref<string>(null);
    return JSX(() => <div class="root">
      <topbar></topbar>
      <div class="apps" >
        {appConfig.map(el => <appIcon appKey={el.key}
          onClick={() => {
            url.value = el.url;
          }}
        ></appIcon>)}
      </div>
      <subPage src={url.value} ></subPage>
    </div>)
  }
})