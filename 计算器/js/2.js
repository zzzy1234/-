//   // 面积
//   function area(c){
//   	var one=Number(document.getElementById('txtFirst').value);
//   	var two=Number(document.getElementById('txtSecond').value);
//   	 if(isNaN(one)||isNaN(two)){
//             alert("输入非法数字，无法计算");
//         }else{}
//   	switch(c){
//   		case 'circle':result=one*one*Math.PI;
//   		break;
//   		case 'rectangle':result=one*two;
//   		break;
//   		case 'square':result=one*one;
//   		break;
//   		case'triangle':result=(one*two)/2;
//   		break;
  		
//   	}
//   	document.getElementById('txtResult').value=result;
//   }
// // 最小值
//     function  getMin(){
// 	    var array=document.getElementById('txtFirst').value.split('/');
//        if(isNaN(array)){
//             alert("输入非法数字，无法计算");
//         }else{}
// 	    var min=array[0];
// 	    for(var i=1;i<array.length;i++){
// 		    if(min>array[i]){
// 		    	min=array[i];
// 		    }else{}
// 	    }
// 	    document.getElementById('txtResult').value=min;
//     }
// // 阶乘
//      function factorial(n){
//        if(isNaN(n)){
//             alert("输入非法数字，无法计算");
//         }else{}
//      	var n=document.getElementById('txtFirst').value;
//      	var result=1;
//      	for(var i=1;i<=n;i++){
//      		result=result*i;
//      	}
//      	document.getElementById('txtResult').value=result;
// }

   function fnCaculate(first,second,demo){
     var first=Number(document.getElementById('txtFirst').value);
      var second=Number(document.getElementById('txtSecond').value);
      if (isNaN(first)|| isNaN(second)) {
        return "输入非法数字，无法计算";
      }else{
          return demo(first,second);
        }
    }
    function circleArea(a,b){
      return a*a*Math.PI;
    }
     function rectangleArea(a,b){
      return a*b;
    } function squareArea(a,b){
      return a*a;
    }function triangleArea(a,b){
      return (one*two)/2;
    }
   



// 图片显示
 function show(obj){
        obj.style.color="black";
        document.getElementById("QRcode").className="QRcode";
    } 
    function hide(obj){
        obj.style.color="#fff";
        document.getElementById("QRcode").className="QRcode hide";
    }

  