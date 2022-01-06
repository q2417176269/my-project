/**
 * 生成随机len位数字
 */
const randomLenNum = (len, date) => {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len || 4);
  if (date) random = random + Date.now();
  return random;
};

/*
 * 求两个数组交集
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

/*
 * 求两个数组差集
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

/*
 * 求a和b两个数组差集 fn方法
 *  let are = [{name:'1',age:2,sex:'男'}]
 *  let are2 = [{name:'12',age:2,sex:'女'}, { name: '13', age: 2, sex: '男' }]
 *  console.log(differenceBy(are2,are,v=>v.sex)) // [{name:'12',age:2,sex:'女'}]
 */
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter((x) => !s.has(fn(x)));
};

/*
 * 根据指定参数将数据整合成树结构
 */
const nest = (items, id = null, link = "parent_id") =>
  items.filter((item) => item[link] === id).map((item) => ({ ...item, children: nest(items, item.id) }));

/**
 * 是否是false
 * */
const isFalse = (value) => {
  return value === false;
};
//判断数据 是否是undefined或者null
const isUndef = (v) => {
  return v === undefined || v === null;
};

//判断数据 是否不等于 undefined或者null
const isDef = (v) => {
  return v !== undefined && v !== null;
};

//判断是否真的等于true
const isTrue = (v) => {
  return v === true;
};

/*
 * 判断数据类型是否是string、number、symbol、boolean
 */
const isPrimitive = (value) => {
  return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
};
/*
 * 判断是否是对象
 */
const isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};

/*
 * 方法只执行一次
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

/*
 *  数组对象某个值求和
 */
function arraySum(ary, item) {
  return ary.reduce((pre, next) => {
    return typeof pre === "number" ? pre + parseFloat(next[item]) : parseFloat(pre[item]) + parseFloat(next[item]);
  });
}
// 表单序列化
function serialize(data) {
  const list = [];
  Object.keys(data).forEach((ele) => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join("&");
}

function getObjType(obj) {
  var toString = Object.prototype.toString;
  var map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };

  if (obj instanceof Element) {
    return "element";
  }

  return map[toString.call(obj)];
}

function deepClone(data) {
  var type = getObjType(data);
  var obj;

  if (type === "array") {
    obj = [];
  } else if (type === "object") {
    obj = {};
  } else {
    // 不再具有下一层次
    return data;
  }
  if (type === "array") {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === "object") {
    for (var key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}

let setStore = (params) => {
  const { name, content } = params;
  const obj = {
    dataType: typeof content,
    content: content
  };
  window.sessionStorage.setItem(name, JSON.stringify(obj));
};
/**
 * 获取localStorage
 */

let getStore = (name) => {
  let obj = {};
  let content;
  obj = window.sessionStorage.getItem(name);
  obj = JSON.parse(obj);
  if (obj.dataType === "string") {
    content = obj.content;
  } else if (obj.dataType === "number") {
    content = Number(obj.content);
  } else if (obj.dataType === "boolean") {
    // eslint-disable-next-line no-eval
    content = obj.content === true;
  } else if (obj.dataType === "object") {
    content = obj.content;
  }
  return content;
};
/**
 * 删除localStorage
 */
let removeStore = (name) => {
  window.sessionStorage.removeItem(name);
};

const utils = {
  randomLenNum,
  intersection,
  difference,
  differenceBy,
  nest,
  isFalse,
  isPrimitive,
  isObject,
  once,
  isUndef,
  isTrue,
  isDef,
  arraySum,
  serialize,
  deepClone,
  getStore,
  removeStore,
  setStore
};

export default utils;
