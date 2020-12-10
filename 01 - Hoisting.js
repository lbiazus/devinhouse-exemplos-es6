var x = 2;
function hoisting() {
    {
        console.log("o valor de X é: ", x);
        var x = 3;
    }
}