//forEach, map, filter, reduce


// function forEach(predicate, thisArg){
//     for( let i = 0; i < a.length; i++ ){
//         predicate(a[i], i)
//     }
// }

a=[10, 11, 12, 13, 14, 15];
a.forEach(function(v, i){
    console.log(v, i, this); //각각의 값과 인덱스 번호 , thisArg 
} , [1, 2]); //반복문대신 쓰는 용도


a=[10, 11, 12, 13, 14, 15];
let answer = a.map(function(v, i){
    return v*v;
}, [1, 2]);
console.log(answer); //원본과 똑같은 길이 배열을 저장, 콜백함수가 리턴함수...


a=[10, 11, 12, 13, 14, 15];
let answer = a.filter(function(v, i){
    return v%2==0;
}, [1, 2]);
console.log(answer); // 참인 요소만 저장

a=[10, 11, 12, 13, 14, 15];
let answer = a.reduce(function(acc, value){
    return acc+v;
}, 0);
console.log(answer); //어떤 값을 생성해서 배열.
