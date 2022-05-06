#### react12_app_redux_github_search项目

1）静态页面问题：

​	多使用ul/li，代替纯div（纯div可能出现样式无法预期呈现问题）

2）关于react中使用 img src属性值问题：

​	使用 require(路径)，通过webpack打包图片等资源

​	注意：路径中的图片的文件夹，不能在 public 目录下，而是在 src目录下

3）关于loading，empty的处理问题：

​	a.先判断loading是否为true，若为true，则显示loading效果

​	b.再判断渲染列表是否有数据，若没有，则显示empty效果

​	c.最后loading为false,且有数据时，显示列表数据

4）react-redux的原理，是给每个UI组件包裹一层Provider组件，用于将redux中的state数据和action-creator方法，通过props传入到UI组件中

​	注意：使用时，先得通过 this.props.xx 获取

5）redux-thunk是react异步编程

6）在action-creator中定义的axios方法，在UI组件中使用时，同样可通过 aync + await + axios方法来使用

7）合并多个 reducers 

​	通过 combineReducers实现，参数是对象，对象键值对是 state中的状态键值对

8）reducers暴露的方法名叫什么，则state保存的数据键名就是什么

9）在 action-creator中定义异步action时：

​	第一步：定义同步action工厂函数

​	第二步：定义异步方法（其中使用了第一步的 同步action工厂函数）

10）关于 axios方法：

​	a.  const res = await axios(xxx)

​	b. 通过 try ... catch 包裹异步操作