describe ('calcularNotaFaltante', () => {
        test (' calcula a nota faltante para ser aprovado', ()=>{
        expect(calcularNotaFaltante(6,10)).toBe(4)
        });

        test('deve retornar 0 se o aluno já está aprovado', () => {
        expect(calcularNotaFaltante(10, 10)).toBe(0);
        });

        test('deve lançar erro se a nota atual ou a nota mínima for negativa', () => {
        expect(() => calcularNotaFaltante(-5, 10)).toThrow('As notas não podem ser negativas');
        expect(() => calcularNotaFaltante(5, -10)).toThrow('As notas não podem ser negativas');
        });
        test('deve lançar erro se os parâmetros não forem números', () => {
            expect(() => calcularNotaFaltante('6', 10)).toThrow('Ambos os parâmetros devem ser números');
            expect(() => calcularNotaFaltante(6, '10')).toThrow('Ambos os parâmetros devem ser números');
            expect(() => calcularNotaFaltante(null, 10)).toThrow('Ambos os parâmetros devem ser números');
          });

});