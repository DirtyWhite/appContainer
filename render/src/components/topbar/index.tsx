import { defineComponent, getCurrentInstance } from "vue";
import { JSX } from "../../utils/renderUtil";
export default defineComponent({
  name: "topbar",
  setup() {
    const instance = getCurrentInstance();
    const back = () => {
      instance.emit('back')
    }
    const closeWindow = () => {

    }

    return JSX(() => {
      return <div class="topBar">
        <div class="btn back"
          onClick={back}
        >后退</div>
        <div class="btn close"
          onClick={closeWindow}
        >关闭</div>
      </div>
    })
  },
});