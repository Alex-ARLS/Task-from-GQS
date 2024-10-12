// Função que encontra o volume de um cubo
describe('calcularVolumeCubo', () => {
  
    // Teste para calcular o volume corretamente com valores inteiros
    test('deve calcular corretamente o volume para um valor inteiro', () => {
      expect(calcularVolumeCubo(3)).toBe(27); // 3^3 = 27
    });
    
    // Teste para calcular o volume corretamente com valores reais
    test('deve calcular corretamente o volume para um valor real', () => {
      expect(calcularVolumeCubo(2.5)).toBeCloseTo(15.625); // 2.5^3 = 15.625
    });
  
    // Teste para exibir erro se o valor for 0
    test('deve exibir erro se o valor for 0', () => {
      expect(() => calcularVolumeCubo(0)).toThrow('O lado deve ser um valor positivo');
    });
  
    // Teste para exibir erro se o valor for negativo
    test('deve exibir erro se o valor for negativo', () => {
      expect(() => calcularVolumeCubo(-2)).toThrow('O lado deve ser um valor positivo');
    });
  
    // Teste para exibir erro se o parâmetro não for um número
    test('deve exibir erro se o parâmetro não for um número', () => {
      expect(() => calcularVolumeCubo('lado')).toThrow('O valor deve ser um número');
      expect(() => calcularVolumeCubo(null)).toThrow('O valor deve ser um número');
      expect(() => calcularVolumeCubo(undefined)).toThrow('O valor deve ser um número');
    });
  
  });
  //feito com Ia