function solution (arr){
    arr.sort((a,b) => a-b);
    return arr[0];
}


function solution (arr){
    let answer, min=arr[0]
    for(let i =0; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}


//내장함수로 최솟값 구하기

function solution(arr){
    let Min = Math.min(...arr); //(arr[0], arr[1], ... , arr[n])
    let Max = Math.max(...arr); //최댓값
    return answer;
}