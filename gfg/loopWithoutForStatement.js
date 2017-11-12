function printNos(n) {
    if(n > 0){
        printNos(n-1);
        console.log(n);
    }
}

printNos(100);