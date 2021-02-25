import type { WebviewTag } from "electron";
import { defineComponent, getCurrentInstance, onMounted, ref, toRef, toRefs, watch, watchEffect } from "vue";
import { JSX } from "../../utils/renderUtil";
export default defineComponent({
  name: "subPage",
  props: {
    src: String,
  },
  setup(prop) {

    const page = ref<WebviewTag>(null);
    const { src } = toRefs(prop);

    watchEffect(() => {
      const webview = page.value;
      const url = src.value
      if (!webview || !url) return;
      webview.addEventListener('dom-ready', () => {
        webview.insertCSS(`
          body::-webkit-scrollbar {
            display: none;
          }
        `)
      })
      webview.src = url;
    })

    return JSX(() => {

      return <webview ref={page} class="webview"></webview>
    })
  },
});