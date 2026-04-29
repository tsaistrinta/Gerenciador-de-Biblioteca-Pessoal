// ============================================
// ==== GERENCIADOR DE BIBLIOTECA PESSOAL =====
// ============================================

// --- DADOS ---

const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

// --- ADICIONA DADOS ---

titulos.push(
  'Harry Potter e a Pedra Filosofal',
  'Harry Potter e a Camara Secreta',
  'Harry Potter e o Prisioneiro de Azkaban',
  'Harry Potter e o Calice de Fogo',
  'Harry Potter e a Ordem da Fenix',
  'Harry Potter e o Enigma do Principe',
  'Harry Potter e as Reliquias da Morte',
);
autores.push(
  'J.K. Rowling',
  'J.K. Rowling',
  'J.K. Rowling',
  'J.K. Rowling',
  'J.K. Rowling',
  'J.K. Rowling',
  'J.K. Rowling',
);
anos.push(1997, 1998, 1999, 2000, 2003, 2005, 2007);
paginas.push(264, 287, 348, 624, 800, 559, 592);
lido.push(true, true, true, true, false, false, false);
avaliacoes.push(5, 4, 5, 4, 0, 0, 0);


// --- FUNCOES DE EXIBICAO ---

function exibirBiblioteca(): void {
  console.log('=== MINHA BIBLIOTECA ===');

  titulos.forEach((titulo, i) => {
    const status = lido[i]
      ? `LIDO (${avaliacoes[i]}/5)`
      : 'PENDENTE';

    console.log(
      `${i + 1}. "${titulo}" (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${status}`,
    );
  });
}

// --- EXECUCAO ---

exibirBiblioteca();