export {}

//number 타입 배열
let numArr: number[] = [1,2,3,];


//String 타입 배열
let strArr: string[] = ["엄","준","식"];

//boolean 타입 배열
let booleanArr: boolean[] = [true, false,true];

//다양한 타입 요소 배열
let multiArr = [1,"엄준식"];

let multiArr2: (number|string)[] =  [1,"hello"];

//다차원 배열
let doubleArr: number[][] = [
    [1,2,3],
    [4,5],
];



//튜플 타입
//튜플: 길이와 타입이 고정된 배열(JS에는 없는 특수한 배열)

//길이가 2로 고정된 두개의 number타입 요소를 갖는 튜플(배열)
let tup1: [number, number] = [1,2];

let tup2: [number,boolean,string] = [1,true,"엄"];


//튜플 타입을 자바스크립트로 변환하면 배열로 반환되기에 튜플도 결국 배열
//튜플도 배열이기에 push()나 pop()을 통해 고정된 길이를 무시하고 요소를 추가나 삭제 가능

tup1.push(1);


//튜플을 쓰는 이유

//예)
const users = [
    ["엄준식", 1],
    ["준식엄", 2],
    ["준엄식", 3],
    ["엄식준", 4],
    [5,"빌런"], // <- 새로 추가했는데 오류가 발생하지 않음
  ];

  const users_fixed: [string,number][] = [
    ["엄준식", 1],
    ["준식엄", 2],
    ["준엄식", 3],
    ["엄식준", 4],
    [5,"빌런"], // 오류 발생으로 실수를 바로 잡을 수 있음
  ];


