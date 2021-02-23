interface menuItem {
  title:string
  key:string
  children ? : menu
}
type menu = Array<menuItem>

export const menuConf:menu = [
  {
    title: '账号',
    key:'account'
  },
  {
    title: '设备模拟',
    key: 'devices'
  }
]