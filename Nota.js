function calcularNota(nota, notaMinima){
    if (typeof nota !== 'number' || typeof notaMinima !== 'number'){
        throw new Error ('as duas entradas devem ser numeros');

    }
    if(nota < 0 || notaMinima < 0 ){
        throw new Error ('as notas nao podem ser negativas');
    }
    if (nota >= notaMinima){
        return 0;
    }
    return notaMinima - nota;
}