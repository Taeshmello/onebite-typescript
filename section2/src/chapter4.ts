export {}

//타입 별칭

type User = {
    id: number,
    name: string,
    nickname: string,
    birth: string,
    breed: string,
    location: string,
};

let user1: User = {
    id: 1,
    name: "김포도",
    nickname: "누렁이",
    birth: "11월 말 언저리",
    breed: "시고르자브종",
    location: "침대 밑",
};

let user2: User = {
    id:2,
    name: "김마루",
    nickname: "똥돼지",
    birth: "1월인가 2월 언저리",
    breed: "비숑 프리제",
    location: "우리집 소파",
}


//type User = {} //동일한 스코프에 동일한 이름의 타입 별칭 선언 불가
// 그러나 스코프가 다르면 동일한 이름의 타입 별칭 선언 가능

function test(){
    type User = string;
}
//test 함수 내부에선 User가 string type이 되고 test 함수 바깥쪽에서는 User가 객체 타입이 된다.





//인덱스 시그니쳐(객체의 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법)
type CountryCodes = {
    Korea: string;
    USA: string,
    UNITEDKINGDOM: string,
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    USA: "us",
    UNITEDKINGDOM: "uk",
};

//만약 이때 100개가 넘는 프로퍼티가 추가되어야 한다면 타입 정의에도 각 프로퍼티를 모두 정의해줘야 하기 떄문에 매우 불편할 것이다.


type CountryCodes2 = {
    [key: string]: string;
};

let countryCodes2 : CountryCodes2 = {
    KOREA: "ko",
    USA: "us",
    UNITEDKINGDOM: "uk",
    //(...약 100개 국가),
    BRAZIL: "bz",
};

//만약 국가 코드를 숫자로 보관하는 객체가 하나 더 필요하다면
type CountryNumberCodes = {
    [key:string]:number;
    //반드시 포함해야하는 프로퍼티가 있다면,
    korea: number;

    //시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value타입이 호환되거나 일치해야함.
    korea: string; //오류
};
//string 타입은 number타입과 일치하지 않을 뿐더러 호환되지 않음






