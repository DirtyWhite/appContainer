import { ref } from "vue";

export function useTab(defaultIndex:number = 0) {
  const curTab = ref(defaultIndex);
  const changeTab = (tab:number)=> {
    curTab.value = tab;
  }
  return {
    isActive:(tab:number)=> {
      return curTab.value === tab
    },
    activeTab:curTab,
    changeTab
  }
}