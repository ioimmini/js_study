function solution(arr) {
    let answer = arr;
    let sum = arr.reduce((a,b) => a+b); //배열의 총합
    let flag = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = i+1; j < 9; j++) {
            if((sum-(arr[i]+arr[j]))===100){
                arr.splice(j, 1); // i번째 1개 제거
                arr.splice(i, 1); // j번째 1개 제거
                flag = 1; // 1개 생기면
                break;

            }
        }
        if(flag == 1) break; //멈추기
    }
    return answer;
}

