// Variáveis para aplicar os resultados do teste. Não as altere.

gender = process.argv[2]; // Sexo 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

// Testa o gênero, caso masculino passa para os próximos testes (testes configurados para o genero masc (male))
if (gender === "male") {
    // Testa a altura, caso positivo passa para o próximo teste
    if (height >= 1.7) {
        // Testa Repetiçoes de barra / tempo
        if (barReps >= 6 || barSeconds <= 15) {
            // Testa abdominais, caso seja maior ou igual 41 passa para o proximo teste
            if (abs >= 41) {
                // Testa o tempo de corrida, distancia e tempo
                if (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200) {
                    // Testa natação e se todos os passos anteriores passarem, retorna passed = true
                    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30) {
                        passed = true;
                    }
                }
            }
        }
    // Caso algum teste falhe, retorna passed = false;
    } else {
        passed = false;
    }
    // Senão se, sexo for === (igual) a "female", passa para outra bateria de testes (configuradas para o perfil feminino "female")
} else if (gender === "female") {
    // Altura
    if (height >= 1.6) {
        // Barras / tempo
        if (barReps >= 5 || barSeconds <= 12) {
            // Abdominal
            if (abs >= 41) {
                // Corrida / tempo
                if (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320) {
                    // Natação / tempo / tempo mergulho, caso todos os ifs passarem, retorna passed = true
                    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30) {
                        passed = true;
                    }
                }
            }
        }
    }
// SENÃO retorna passed = false
} else {
    passed = false;
}


// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
