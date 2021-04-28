  'use strict';
function sleep(millisecond) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, millisecond)
    })
}


async function test() {
    const start = new Date().getTime();
    console.log("执行开始",start);
    await sleep(3000);
    console.log("执行结束",new Date().getTime() - start)
}

test();


// /**
//  * map forEach reduce every filter
//  * */

let arrList = [1,2,3,4,5,6];
let newList = arrList.map(function (param) {
    let newObj = {};
    newObj[param] = param * param;
    return newObj
})
console.log(newList);

let newObj = {
    1:["fda254bvcb","dfgfds543gfd","jhg772jgc","fhjy6764jhkk"],
    5:["fasd21sdgf","fsdf334gfsd","fds112tgsdf","gsdfg434gsdf"],
    2:["fasd21sdgf","fsdf334gfsd","fds112tgsdf","gsdfg434gsdf"]
}
let newObjOne = {};
Object.keys(newObj).sort(function(a,b){return a-b}).forEach(function (key) {
    let valueObj = {},valueList = [];
    for(let value of newObj[key]){
        let valueStr = value.replace(/[^0-9]/ig,"");
        valueObj[parseInt(valueStr)] = value;
    }
    Object.keys(valueObj).sort(function(a,b){return a-b}).forEach(function (key) {
        valueList.push(valueObj[key])
    });
    newObjOne[key] = valueList
});
console.log(newObjOne);


  let arrList = [1,2,3,4,5,6];
  let newList = arrList.map(function (param) {
      let newObj = {};
      newObj[param] = param * param;
      return newObj
  })
  console.log(newList);

var arr = [2, 3, 4, 5, 6]; // 每个值的平方
var newArr = arr.reduce((accumulator, cur) => {accumulator.push(cur * cur); return accumulator;}, []);
console.log("newArr",newArr);
var sum = arr.reduce(function (prev, cur) {
    return prev + cur;
},0);
console.log("sum",sum);
var max = arr.reduce(function (prev, cur) {
    return Math.max(prev,cur);
});
console.log("max",max);
var newArrTwo = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
},[]);
console.log("newArrTwo",newArrTwo);
var streams = [{name: '技术', id: 1}, {name: '设计', id: 2}];
var obj = streams.reduce((accumulator, cur) => {accumulator[cur.id] = cur; return accumulator;}, {});
console.log("obj",obj);


//every

var ages = [32, 33, 16, 40];

var status = ages.every(function checkAdult(age) {
    return age >= 18;
});
console.log("status",status);


//filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = nums.filter((num) => {
    return num > 5;
});

console.log(res);  // [6, 7, 8, 9, 10]


/**-----------------------------------------------------------------------------------------*/

function isPromise(obj){
    return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}



const promiseAll = function (arr) {
    return new Promise((resolve, reject) => {
        let result = [];
        for(let i=0; i < arr.length; i++){
            if(isPromise(arr[i])){
                arr[i].then((data)=>{
                    result[i] = data;
                    if(result.length === arr.length){
                        resolve(result)
                    }
                },reject)
            }else{
                result[i] = arr[i]
            }
        }
    })
}

let p1 = new Promise((resolve, reject) => {
    resolve("resolveP1")
})
let p2 = new Promise((resolve, reject) => {
    resolve("resolveP2")
})

promiseAll([p1,p2]).then(value => {
    console.log(value);
},reason => {
    console.log(reason)
});

//json对象键值驼峰模式转换成下划线模式

let objE = {
    "oneName":"zhangSan",
    "twoName":"liSi",
    "threeName":"wangEr"
}

function tuoFTOther(obj){
    let newObj = {};
    Object.keys(obj).forEach(function (key) {
        let newKey = key.replace(/([A-Z])/g,"_$1").toLowerCase();
        newObj[newKey] = obj[key]
    });
    return newObj
}
console.log("tuoFTOther",tuoFTOther(objE));
