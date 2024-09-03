/**
 * Unknown 타입
 */

function unKnownExam() {

    // 업캐스팅 가능
    let a : unknown = 1;
    let b : unknown = "ajadksnlv";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;


    let unknownVar : unknown;

    // 다운캐스팅 불가
    // let num : unknownVar;
    // let str : string = unknownVar;
    // let bool : boolean = unknownVar;
};


/**
 * Never 타입 => 공집합
 */

function neverExam() {
    function neverFunc() {
        while(true){}
    }
}






