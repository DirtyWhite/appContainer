<style lang="scss" scoped src="./topbar.scss"></style>

<script lang="tsx">
import { defineComponent, watch, watchEffect } from "vue";
import { menuConf } from "../config/menu";
import { useTab } from "../hooks/useTab";
import { JSX } from "../utils/renderUtil";
import { map } from "rxjs/operators";
export default defineComponent({
  name: "Topbar",
  setup: () => {
    const { isActive, changeTab } = useTab(0);

    return JSX(() => (
      <section class="topbar">
        {menuConf.map((el, index) => {
          return (
            <div class="menu" key={el.key}>
              <div
                onClick={() => changeTab(index)}
                class={["menuItem", { active: isActive(index) }]}
              >
                {el.title}
              </div>
            </div>
          );
        })}
      </section>
    ));
  },
});
</script>