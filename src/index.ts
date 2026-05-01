
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

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

exibirBiblioteca();


function adicionarLivro(

  titulo: string,
  autor: string,
  ano: number,
  numPaginas: number,

): void {

  if (ano <= 0) {
    console.log(`\nErro: ano invalido (${ano}). Livro nao adicionado.`);
    return;
  }

  if (numPaginas <= 0) {
    console.log(`\nErro: paginas invalidas (${numPaginas}). Livro nao adicionado.`);
    return;
  }

  titulos.push(titulo);
  autores.push(autor);
  anos.push(ano);
  paginas.push(numPaginas);
  lido.push(false);          

  console.log(`\nLivro adicionado: "${titulo}"`);
}


function removerLivro(indice: number): void {
 
  if (indice < 0 || indice >= titulos.length) {
    console.log(`\nErro: indice ${indice} invalido. Nenhum livro removido.`);
    return;
  }

  const tituloRemovido = titulos[indice];

  titulos.splice(indice, 1);
  autores.splice(indice, 1);
  anos.splice(indice, 1);
  paginas.splice(indice, 1);
  lido.splice(indice, 1);
  avaliacoes.splice(indice, 1);

  console.log(`\nLivro removido: "${tituloRemovido}"\n`);

exibirBiblioteca();

}


function buscarPorTitulo(termo: string): number[] {
  const termoLower = termo.toLowerCase();
  const indicesEncontrados: number[] = [];

  titulos.forEach((titulo, i) => {
    if (titulo.toLowerCase().includes(termoLower)) {
      indicesEncontrados.push(i);
    }
  });

  return indicesEncontrados;
}

function listarPorAutor(autor: string): string[] {
  const autorLower = autor.toLowerCase();

  const titulosDoAutor = titulos
    .filter((_, i) => autores[i].toLowerCase().includes(autorLower))
    .map((titulo) => titulo);

  return titulosDoAutor;
}

// --- TESTE DA ETAPA 4 ---

console.log('\n=== TESTE: buscarPorTitulo("potter") ===');
const indicesPotter = buscarPorTitulo('potter');
console.log('Indices encontrados:', indicesPotter);

console.log('\n=== TESTE: buscarPorTitulo("PEDRA") ===');
const indicesPedra = buscarPorTitulo('PEDRA');
console.log('Indices encontrados:', indicesPedra);

console.log('\n=== TESTE: buscarPorTitulo("xyz") (nao existe) ===');
const indicesXyz = buscarPorTitulo('xyz');
console.log('Indices encontrados:', indicesXyz);

console.log('\n=== TESTE: listarPorAutor("rowling") ===');
const livrosRowling = listarPorAutor('rowling');
console.log(livrosRowling);

console.log('\n=== TESTE: listarPorAutor("tolkien") (nao existe) ===');
const livrosTolkien = listarPorAutor('tolkien');
console.log(livrosTolkien);