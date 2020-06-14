// ```
// 1*1=1
// 2*1=2 2*2=4
// 3*1=3 3*2=6 3*3=9
// ……
// 9*1=9 9*2=18 9*3=27 …… 9*9=81
// ```
window.onload = function (){
    for(let i = 1;i <= 9;i++){
        let result = '';
        for(let j = 1;j <= i;j++){
            result += i + ' * ' + j + ' = ' + i*j + '\t';
        }
        console.log(result);
    }
}