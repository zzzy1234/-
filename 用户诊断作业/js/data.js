var data =[
    {  
        "id":"001",
        "企业名称":"广州黄峥服饰有限公司",
        "商品关键词":"女士T恤",
        "客单价":245667,
        "销售额":123323,
        "转化率":0.95
    	
    },
    {
    	"id":"002",
    	"企业名称":"杭州冰馨服饰有限公司",
    	"商品关键词":"女士T恤",
    	"客单价":74285,
    	"销售额":91138,
        "转化率":0.80
    },
    {
        "id":"003",
        "企业名称":"浙江良汭电子务有限公司",
        "商品关键词":"女士T恤",
        "客单价":73058,
        "销售额":75833,
        "转化率":0.79
    },
    {
       "id":"004",
        "企业名称":"即墨区吴多多服装厂",
        "商品关键词":"女士T恤", 
        "客单价":71015,
        "销售额":63371,
        "转化率":0.78
    },
    {
        "id":"005",
        "企业名称":"广州木兰服饰有限公司",
        "商品关键词":"女士T恤",
        "客单价":13840,
        "销售额":62476,
        "转化率":0.70
    },
    {
        "id":"006",
        "企业名称":"即墨区尤恩博恩服饰厂",
        "商品关键词":"女士T恤",
        "客单价":10141,
        "销售额":60260,
        "转化率":0.69
    },
    {
        "id":"007",
        "企业名称":"杭州言双服饰有限公司",
        "商品关键词":"女士T恤",
        "客单价":7647,
        "销售额":57536,
        "转化率":0.67
    },
    {
        "id":"008",
        "企业名称":"即墨区咸鱼归来服饰商行",
        "商品关键词":"女士T恤",
        "客单价":7243,
        "销售额":54167,
        "转化率":0.65
    },
     {
        "id":"009",
        "企业名称":"浦江县递衣佳电子商务有限公司",
        "商品关键词":"女士T恤",
        "客单价":2173,
        "销售额":53709,
        "转化率":0.60
    },
    {
        "id":"010",
        "企业名称":"义乌市楠涛服饰有限公司",
        "商品关键词":"女士T恤",
        "客单价":1932,
        "销售额":53697,
        "转化率":0.59
    }
    ];

  function fnGetAllName(data){
    var result=[];
    for(var i=0;i<data.length;i++){
        result.push(data[i].企业名称);
    }
    return result;
  }

  function fnGetAllPrice(data){
    var result=[];
    for(var i=0;i<data.length;i++){
        result.push(data[i].客单价);
    }
    return result;
  } 

  function fnGetAllRate(data){
    var result=[];
    for(var i=0;i<data.length;i++){
        result.push(data[i].转化率);
    }
    return result;
  }

  //抽象函数，取出对象中某个属性做为数组
  function fnGetFields(data,className){
  	var output=[];
  	for(var i=0;i<data.length;++i){
  		output.push(data[i][className]);
  		return o[field];
  	}
  }

//以上函数的ES6优化写法，可以等价使用
function getFields(input,field){
	return input.map(function(o){
		return o[field];
	})
}