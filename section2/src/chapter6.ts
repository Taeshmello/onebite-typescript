

//any와 unknown

//any 타입(타입 검사를 받지 않는 특수한 타입)

// let anyVar = 10;
// anyVar = "hello"; //오류 발생

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;


let anyVar2: any = 10;
anyVar2 = "hello";

let num : any = 10;
num = anyVar2;

//any 타입은 지양할 것.




//unKnown 타입

let num2 : number = 10

let unKnownVar : unknown; 

//unKnown 타입은 any타입보단 안전한 타입이다.

unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

// 반대로 unKnown 타입의 값은 어떤 타입에도 저장할 수 없다.

num2 = unKnownVar; // 오류

//unKnown 타입은 어떤 연산에도 참여할 수 없으며, 어떤 메소드도 사용할 수 없다.
unKnownVar * 2 // 오류

//만약 unKnown을 연산에 참여시키고 싶다면,

if(typeof unKnownVar == "number"){
    unKnownVar * 2
}





