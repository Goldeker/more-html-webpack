
more-html-webpack用于打包多页面项目的脚手架，这使我们很愉快的使用的less，因为它会帮我们编译成css代码


配置

```javascript
 /**
 * 全局配置文件
 */
 module.exports = {
   // 项目中的js文件，不需要后缀
   jsFilename:[
          "test",
   	   "demo"
   ],
   //html文件名:js文件名(数组类型),没有为则为[]
   jsToHtml:{
   	   home:['test'],
   	   index:[
   	   	"demo",
   	   	"test"
   	   ]
   }
 }

```
用法

> **npm install** 
> **npm run dev**
> **npm run build**
