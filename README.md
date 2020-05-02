# PiKaQiu
### 用CSS3和动画写的一个皮卡丘 
***
1. 速度的选择
```
switch(speed){
      case 'slow': //慢速
          duration = 100
          break
      case 'normal': //中速
          duration = 50
          break
      case 'fast': //快速
          duration = 10
          break
    }
 ```
 ***
 2. 音乐的添加 audio 和 css 结合
#### audio
```
 <audio autoplay="autoplay" loop="loop" preload="auto" controls="controls" src="./weiwei.mp3">你的浏览器不支持audio标签</audio>
```
#### css
```
audio{
display:none;//隐藏
}
```
#### 【注】
- autoplay  
autoplay="autoplay"；如果出现该属性，则音频在就绪后马上播放。
- loop  
loop="loop"；如果出现该属性，则每当音频结束时重新循环开始播放。
- preload  
preload="auto"；如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 “autoplay”，则忽略该属性。
- controls  
controls="controls"；如果出现该属性，则向用户显示控件，比如播放按钮。
- src  
src="src"；要播放的音频的 URL。也可以使用<source>标签来设置音频
