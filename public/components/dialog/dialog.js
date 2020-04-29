// public/components/dialog/dialog.js
Component({
  //多个插槽的配置
  options:{
    multipleSlots:true, //开启多slot
    styleIsolation:'apply-shared' //是否开启公共样式穿透
  },
  externalClasses:['my-bg'],//指定使用外部样式类
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      value:"标题", //默认值
      type:String   //类型
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm(e){
      this.triggerEvent("send","我来了父亲")
     
    }
  }
})
