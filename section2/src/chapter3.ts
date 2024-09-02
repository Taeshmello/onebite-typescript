//객체

//TypeScript에서는 객체를 두 가지 방식으로 정해줄 수 있다.

//1. object로 정의하기
let user:object = {
    id:1,
    name:"엄준식",
};

user.id; //오류가 발생하는데 object가 아닌 리터럴 타입을 이용해야함.

let user_fixed: {
    id:number,
    name:string,
} = {
    id:1,
    name:"엄준식",
};

user_fixed.id;


let dogs: {
    name:string,
    color: string,
} = {
    name: "포도와 마루",
    color: "yellow color having both a black and a light tone & white"
};

dogs.name;
dogs.color;


//특수한 프로퍼티 정의하기


//선택적 프로퍼티
// let user2: {
//     id: number,
//     name: string,
// } = {
//     id: 1,
//     name: "준엄식",
// };

// user2 = {
//     name: "아무개", // 오류 발생
// }



let user2: {
    id?: number, //선택적 프로퍼티가 된 id
    //주의할 점: 선택적 프로퍼티가 존재한다면 반드시 그 타입은 number이여야함.
    name?: string,
} = {
    id: 1,
    name: "준엄식",
};

user2 = {
    id = "id", //오류 발생
    name: "아무개", 
}



//읽기 전용 프로퍼티

let user3: {
    id?: number,
    readonly name: string; // name은 readonly 프로퍼티가 되었음
} = {
    id: 1,
    name:"김포도",
};

user3.name = "김마루"; //오류 발생

//name 프로퍼티는 이제 읽기 전용 프로퍼티가 되었으므로 80번쨰 라인처럼 수정하려면 에러가 발생한다.
//이를 통해 의도치 않은 프로퍼티 수정을 방지할 수 있다

