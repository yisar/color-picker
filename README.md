# color-picker
Auto pick the primary color.

```js
import { getColor } from './index.js'
const canvas = document.querySelector('canvas')
getColor(canvas) // [22, 33, 44]
```
实现思路——

```js

$1. 根据像素的尺寸抽样取像素
$2. 拿到像素的色值
$3. 根据 [明度] 去除太亮和太脏的颜色
$4. 根据 [饱和度] 得到最佳的颜色

// TODO: 根据 [色相] 进行分组

```
