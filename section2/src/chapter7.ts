//void와 never

//void 타입은 아무런 값도 없음을 의미한다.
//보통은 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용된다.

function func2(): void{
    console.log("hello");
}

//void를 변수 타입으로 지정할 수 있지만 void 타입의 변수에는 undefined 이외에 다른 타입의 값을 담을 수는 없다.
let a : void;
a = undefined;

//하지만 tsconfig.json에 엄격한 null 검사 "strictNullChecks"옵션을 false로 하면 이때는 특별히 void 타입 변수에 null 값도 담을 수 있게 된다.

let b : void;
b = undefined;
b = null;



//never 타입(불가능을 의미하는 타입)
//어떠한 값도 반환할 수 없는 상황일때 반환값 타입을 정의할 떄 사용
function func3() : never {
    while(true){}
}

//func3는 무한 루프를 돌기 때문에 아무런 값도 반환을 할 수가 없다. 이 함수는 영원히 종료될 수 없기 때문에 뭔가를 반환한다는 것 자체가 '불가능'하다.
//이렇게 불가능한 타입을 정의할 때 never 타입을 사용한다.

//무한 루프 외에도 의도적으로 오류를 발생시키는 함수도 never타입으로 반환값 타입을 정의할 수 있다.
function func4() : never {
    throw new Error();
}


//변수의 타입을 never로 정의하면 any를 포함해 그 어떤 타입의 값도 변수에 담을 수 없다
let anyVar : any;
let c : never;
c = 1;
c = null;
c = undefined;
c = true;
c = anyVar;
