function calculoDeVolumo(side){
    if (typeof side !== 'numero'){
        throw new Error ('esta entrada deve ser com números.');
    }
    if (side <= 0){
        throw new Error ('O lado deve ser maior que zero.');
    }
    return side ** 3;
}
