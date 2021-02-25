
interface appConfig {
  title:string
  icon:string
  key:string
  width:number
  height:number
  url:string
}

export const appConfig:Array<appConfig> = [
  {
    title: '微信读书',
    icon: '',
    key: 'wechatReader',
    width: 600,
    height: 700,
    url:'https://weread.qq.com/'
  }
];