//열거형(Enum) 타입(JavaScript에선 사용 불가, 오직 TypeScript에서만 사용 가능)


//열거형은 다음과 같이 여러개의 값을 나열하는 용도로 사용함
// enum Role {
//     ADMIN,
//     USER,
//     GUEST,
// };

//enum에 각 멤버에는 숫자를 할당할 수 있음.

// enum Role {
//     ADMIN = 0,
//     USER = 1,
//     GUEST = 2,
// };

//또 다음과 같이 enum의 멤버들을 값으로 활용할 수 있음

// enum Role {
//     ADMIN = 0,
//     USER = 1,
//     GUEST = 2,
// };

// const user1 = {
//     name:"김포도",
//     role: Role.ADMIN, // ADMIN
// };

// const user2 = {
//     name: "김마루",
//     role: Role.USER, //USER
// };

// const user3 = {
//     name: "엄준식",
//     role: Role.GUEST //GUEST
// };


//enum 멤버에 숫자 값을 직접 할당하지 않아도 0부터 1씩 늘어나는 값으로 자동 할당된다.


enum Role {
    ADMIN = 10, // 10 할당 (임의로 지정)
    USER, // 11 할당 (자동)
    GUEST, // 12 할당 (자동)
};

const user1 = {
    name:"김포도",
    role: Role.ADMIN, // 10
};

const user2 = {
    name: "김마루",
    role: Role.USER, // 11
};

const user3 = {
    name: "엄준식",
    role: Role.GUEST // 12
};


//문자열 열거형
//enum에는 숫자 말고 문자열도 지정해줄 수 있다.

enum Role2 {
    ADMIN,
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "김포도",
    role: Role2.ADMIN, //0
    language: Language.korean,
};



