//定义
    var companyName=document.getElementById("companyName");
    var one = document.getElementById("txtFirst");
    var two=document.getElementById("txtSecond");
    var three=document.getElementById("txtThird");
    var result=document.getElementById("txtForth");
    var fnCaculate=document.getElementById("caculate");
    var evaluate=document.getElementById("diagose");

    var datalist=document.getElementById("datalist");

    var getPrice=document.getElementById("price");
    var getTurn=document.getElementById("turn");
    var getName=document.getElementById("name");

fnCaculate.addEventListener("click",function(){result.value=fnGetCaculate(Number(one.value),Number(two.value),Number(three.value),getSale)});
evaluate.addEventListener("click",function(){resultTxt.value=fnGetCaculate(Number(one.value),Number(two.value),Number(result.value),judge)});
getPrice.addEventListener("click",function(){resultTxt.value=fnGetClass('客单价',one.value,fnGetAllPrice(data));});
getTurn.addEventListener("click",function(){resultTxt.value=fnGetClass('转化率',two.value,fnGetAllRate(data));});
getName.addEventListener("click",function(){resultTxt.value=fnGetName(companyName.value,fnGetAllName(data));});



//合法数字
    function fnGetCaculate(a,b,c,demo){
	    var result=0;
	    if (isNaN(a)|| isNaN(b) || isNaN(c)) {
            return "输入非法数字，无法计算";
        }
        else if(b>1){
            return "请将转化率换为小数";
        }
        else{
               return demo(a,b,c);
        }
     }

//计算销量
    function getSale(a,b,c){
	    return a*b*c;
    }

//判断
  function judge(a,b,c){
	if(a>46000 && b>0.72 && c>69000 ){
		return "恭喜您的店铺为优秀店铺，各项指标超于平均值，请继续保持！！"
	}
	else if(a<46000 && b>0.72 && c>69000 ){
		return "您的店铺被评为中等店铺，客单价指标低于平均值，请优化拉后腿的项目！！"
	}
    else if(a>46000 && b<0.72 && c>69000 ){
        return "您的店铺被评为中等店铺，转化率指标低于平均值，请优化拉后腿的项目！！"
    }
    else if(a>46000 && b>0.72 && c<69000 ){
        return "您的店铺被评为中等店铺，销售额指标低于平均值，请优化拉后腿的项目！！"
    }
    else if(a<46000 && b<0.72 && c>69000 ){
        return "您的店铺被评为中低等店铺，客单价和转化率指标低于平均值，请优化拉后腿的项目！！"
    }
    else if(a<46000 && b>0.72 && c<69000 ){
        return "您的店铺被评为中低等店铺，客单价和销售额指标低于平均值，请优化拉后腿的项目！！"
    }
    else if(a>46000 && b<0.72 && c<69000 ){
        return "您的店铺被评为中低等店铺，转化率和销售额指标低于平均值，请优化拉后腿的项目！！"
    }
    else{
        return "抱歉您的店铺被评为低等店铺，各项指标低于平均值，快加油努力！！"
    }
  }

//动态展示
    datalistInit(datalist,data);

    //排序
    function datalistInit(object,data){
        var tr=document.createElement('tr');
        var td=document.createElement('td');
        td.innerHTML="企业名称";
        tr.appendChild(td);
        var td=document.createElement('td');
        td.innerHTML="商品关键词";
        tr.appendChild(td);
        var td=document.createElement('td');
        td.innerHTML="客单价";
        tr.appendChild(td);
        var td=document.createElement('td');
        td.innerHTML="销售额";
        tr.appendChild(td);
        var td=document.createElement('td');
        td.innerHTML="转化率";
        tr.appendChild(td);
        object.appendChild(tr);

         for(var i=0;i<data.length;i++){
              var tr=document.createElement('tr');
             var td=document.createElement('td');
             td.innerHTML=data[i].企业名称;
             tr.appendChild(td);

             var td=document.createElement('td');
             td.innerHTML=data[i].商品关键词;
             tr.appendChild(td);

             var td=document.createElement('td');
             td.innerHTML=data[i].客单价;
             tr.appendChild(td);

             var td=document.createElement('td');
             td.innerHTML=data[i].销售额;
             tr.appendChild(td);

             var td=document.createElement('td');
             td.innerHTML=data[i].转化率;
             tr.appendChild(td);
     
              object.appendChild(tr);
        }
     }

//查询
     function fnGetName(string,array){
        var result='';
        if(array.indexOf(string)==-1){
            result=`你所输入的企业名称：${string} 未进入榜单`;
        }else{
            result=`恭喜，你所输入的企业名称：${string} 进入Top榜单`;
        }
        return result;
     }

//排名
    function fnGetClass(classname,string,array){
        var result='';
        if(!Number(string) || Number(string)<0){
           result=`你输入的${classname}:${string} 不是合法的数字,请重新输入`;
        }
        else{
            data.sort(function (a,b){return b.classname-a.classname})};
        
        var one=Number(string);
        var flag=-1;
        for(var i=0;i<array.length;i++){
            if(one>array[i]){
                flag=i;
                break;
            }
        
        }

        switch(flag){
            case -1:
            result=`抱歉，你所运营的${classname}：${string} 未进入榜单`;
            break;
            case 0:
            result=`祝贺你，你所运营的${classname}：${string} 进入榜首`;
            break;
            default:
            result=`你所运营的${classname}：${string} 进入Top榜单，排名第${flag}`;
        }
    
         return result;
    }