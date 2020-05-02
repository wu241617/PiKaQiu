!function(){
   let duration = 50
   $('.actions').on('click','button',(e)=>{
    let $button =  $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)

    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
          duration = 100
          break
      case 'normal':
          duration = 50
          break
      case 'fast':
          duration = 10
          break
    }

  })





	function writeCode(prefix,code,fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		setTimeout(function run(){
			n+=1
			container.innerHTML = code.substring(0,n)
			styleTag.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n < code.length){
				setTimeout(run,duration)
        console.log(duration)
			}else{
        fn && fn.call()
      }
		},duration)
	}

	let code = `

  /*现在，我们开始画一只可爱的皮卡丘*/

  /*首先，准备下皮卡丘的皮肤*/

	#preview{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FFE600;
    }
    .wrapper{
      width:100%;
      height: 165px;
      position: relative;
    }

    /*现在，我开门开始画皮卡丘的鼻子*/

    .nose{
      border:11px solid black;
      border-color:black transparent transparent transparent;
      border-radius:50%;
      width: 0;
      height: 0;
      position:absolute;
      left:50%;
      top: 28px;
      transform:translateX(-50%);
    }

    /*接着，我们画皮卡丘圆圆的大眼睛*/


    .eye{
      width:49px;
      height:49px;
      position:absolute;
      background: #2F2E30;
      border-radius: 50%;
      border: 2px solid #000000;
    }

    /*  左边的眼睛*/

    .eye.left{
      right: 50%;
      margin-right: 90px;
    }

    /*右边的眼睛*/

    .eye.right{
      left: 50%;
      margin-left: 90px;
    }


    /*然后是 闪闪的眼珠子*/
    
    .eye::before{
      content:'';
      display: block;
      width: 24px;
      height: 24px;
      background: white;
      position: absolute;
      left: 4px;
      border-radius: 50%;
      border: 2px solid black;
    }

    /*接着我们画皮卡丘的小脸蛋儿*/

    .face{
      width: 68px;
      height: 68px;
      border: 2px solid black;
      background: red;
      position: absolute;
      border-radius:50%;
      top: 85px;
    }

    /*左脸颊红扑扑*/

    .face.left{
      right: 50%;
      margin-right: 116px;
    }

    /*右脸颊红扑扑*/

    .face.right{
      left: 50%;
      margin-left: 116px;
    }


    /*接着是弯弯的小嘴唇*/
    
    .upperLip{
      position: absolute;
      top: 52px;
      width: 80px;
      height: 22px;
      border: 3px solid black;
      background: #FFE600;
      
    }
    .upperLip.left{
      right: 50%;
      transform: rotate(-20deg);
      border-bottom-left-radius: 100px 60px;
      border-top: none;
      border-right: none;
    }
    .upperLip.right{
      left: 50%;
      transform: rotate(20deg);
      border-bottom-right-radius: 100px 60px;
      border-top: none;
      border-left: none;
    }

    /* 然后是萌萌的大嘴巴*/


    .lowerLip-wrapper{
      position: absolute;
      bottom: 0;
      right: 50%;
      height: 106px;
      width: 300px;
      margin-right: -150px;
      overflow: hidden;
    }
    .lowerLip{
      position: absolute;
      bottom: 0;
      right: 50%;
      margin-right:  -100px;
      width: 200px;
      height: 1000px;
      background: #9B000A;
      border-radius: 100px/500px; 
      border: 2px solid  black;
      overflow: hidden;
    }
    .lowerLip::after{
      content: '';
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #FF485F;
      position: absolute;
      bottom: -15px;
      right: 50%;
      margin-right: -50px;
    }


    /*好啦，一只超级可爱萌萌哒皮卡丘制作好啦~~*/

	`

  writeCode('',code)

 



}.call()
