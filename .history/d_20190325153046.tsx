import ObObject from "yuejia/app/datatype/obObject";
import ObArray from "yuejia/app/datatype/obArray";

const objectType = new ObObject<ObjectType>({
  defaultValue:{
    stringType: stringType.get(),
    numberType: numberType,
    boolType: boolType.get()

  }
});

const stringArrayType = new ObArray<string>({defaultValue: [stringType.get()]})
const stringArray = 
new ObArray<string>({
  defaultValue: [stringType.get()]
});

// 构造函数的对象是可选对象，有两个属性，request和defaultValue。
// request：是一个内置的请求类，但数据需要和请求绑定时，需要设置这个属性
// defaultValue:默认值，用于初始化时的赋值，ObObject的defaultValue为必填；
// 