function operation(c){
    var one=Number(document.getElementById("txtFirst").value);
    var two=Number(document.getElementById("txtSecond").value);
    var result=0;
        if(isNaN(one)||isNaN(two)){
            alert("输入非法数字，无法计算");
        }else{}
        switch(c){
            case '+':result=one+two;
            break;
            case '*':result=one*two;
            break;
            case '/':result=one/two;
            break;
            case '^':result=Math.pow(one,two);
            break;
            case 'rather':result=(one>two)?one+">"+two:(one<two)?one+"<"+two:one+"="+two;
        }
        document.getElementById("txtResult").value=result;
}

// 未封装
    // // 1、加法
    //     function sum(){
    //         var one=Number(document.getElementById("txtFirst").value);
    //         var two=Number(document.getElementById("txtSecond").value);
    //         var result=0;
    //         if(isNaN(one)||isNaN(two)){
    //             alert("输入非法数字，无法计算");
    //         }else{
    //             result=one+two;
    //         }
    //         document.getElementById("txtResult").value=result;
    //     }
    
    // // 2、乘法 
    //     function multiply(){
    //         var one=Number(document.getElementById("txtFirst").value);
    //         var two=Number(document.getElementById("txtSecond").value);
    //         var result=0;
    //         if(isNaN(one)||isNaN(two)){
    //             alert("输入非法数字，无法计算");
    //         }else{
    //             result=one*two;
    //         }
    //         document.getElementById("txtResult").value=result;
    //     }

    // /// 3、除法
    //  function divide(){
    //        var one=Number(document.getElementById("txtFirst").value);
    //         var two=Number(document.getElementById("txtSecond").value);
    //         var result=0;
    //         if(isNaN(one)||isNaN(two)){
    //             alert("输入非法数字，无法计算");
    //         }else{
    //             result=one/two;
    //         }
    //         document.getElementById("txtResult").value=result;
    //     }

    //  // 4、比较
    //     function rather(){
    //        var one=Number(document.getElementById("txtFirst").value);
    //         var two=Number(document.getElementById("txtSecond").value);
    //         var result=0;
    //         if(isNaN(one)||isNaN(two)){
    //             alert("输入非法数字，无法计算");
    //         }else if(one>two){
    //             result=one+">"+two;
    //         }else if(one==two){
    //             result=one+"="+two;
    //         }else{
    //             result=one+"<"+two;
    //         }
    //         document.getElementById("txtResult").value=result;
    //     }

    //  // 5、幂
    //     function power(){
    //        var one=Number(document.getElementById("txtFirst").value);
    //         var two=Number(document.getElementById("txtSecond").value);
    //         var result=0;
    //         if(isNaN(one)||isNaN(two)){
    //             alert("输入非法数字，无法计算");
    //         }else{
    //             result=Math.pow(one,two);
    //         }
    //         document.getElementById("txtResult").value=result;
    //     }

// 图片显示
    function show(obj){
        obj.style.color="black";
        document.getElementById("QRcode").className="QRcode";
    } 
    function hide(obj){
        obj.style.color="#fff";
        document.getElementById("QRcode").className="QRcode hide";
    }

  

