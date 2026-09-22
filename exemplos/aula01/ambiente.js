process.loadEnvFile('.env');
const obrigatorias = ['NOME_ALUNO', 'TURMA'];
const ausentes = obrigatorias.filter((nome)=>!process.env[nome]?.trim());

if (ausentes.length) {
    console.error(`Informe os seguintes campos: ${ausentes.join(',')}`);
    process.exitCodem = 2;
} else {
    console.log({estudante:process.env.NOME_ALUNO, turma: process.env.TURMA});
}