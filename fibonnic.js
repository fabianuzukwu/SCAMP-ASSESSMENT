function fibonicSeries(n){
    let i = 0;

    let limitLoopTime = n ;
    let firstInstanceNum = 0;
    let fibonacciNum = 1;
    let allFinNumbers = [];
    while (i <= limitLoopTime){
        allFinNumbers.push(firstInstanceNum);
        fibonacciNum += firstInstanceNum;
        allFinNumbers.push(fibonacciNum);
        firstInstanceNum += fibonacciNum;
        i++;
    };
    console.log(allFinNumbers);
};
fibonicSeries(6);




