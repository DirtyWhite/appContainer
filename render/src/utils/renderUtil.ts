import { getCurrentInstance, withScopeId } from "vue"

export function JSX(render:()=>JSX.Element) {
  const instance = getCurrentInstance() as any;
  const id = instance?.type.__scopeId
  return withScopeId(id)(render);
}