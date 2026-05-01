
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


function marcarComoLido(indice: number, avaliacao: number): void {

  if (indice < 0 || indice >= titulos.length) {
    console.log(`Erro: indice ${indice} invalido.`);
    return;
  }

    if (avaliacao < 1 || avaliacao > 5) {
  console.log('Avaliacao invalida.');
  return;
}

  lido[indice] = true;
  avaliacoes[indice] = avaliacao;

  console.log(`Livro "${titulos[indice]}" marcado como LIDO (${avaliacao}/5).`);
}

function listarLidos(): string[] {
  return titulos.filter((_, i) => lido[i] === true);
}

function listarPendentes(): string[] {
  return titulos.filter((_, i) => lido[i] === false);
}

function totalLivros(): number {
  return titulos.length;
}

function totalLidos(): number {
  return lido.filter((l) => l === true).length;
}

function percentualLidos(): number {
  if (totalLivros() === 0) return 0;

  const percentual = (totalLidos() / totalLivros()) * 100;
  return Number(percentual.toFixed(2));
}

function mediaAvaliacoes(): number {
  const notasDosLidos = avaliacoes.filter((_, i) => lido[i] === true);

  if (notasDosLidos.length === 0) return 0;

  const soma = notasDosLidos.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notasDosLidos.length;

  return Number(media.toFixed(2));
}

function melhoresLivros(): string[] {
  return titulos.filter((_, i) => avaliacoes[i] === 5);
}

function totalPaginasLidas(): number {
  return paginas
    .filter((_, i) => lido[i] === true)
    .reduce((acc, p) => acc + p, 0);
}

console.log('\n=== ESTATISTICAS ===');
console.log(`Total de livros: ${totalLivros()}`);
console.log(`Livros lidos: ${totalLidos()} (${percentualLidos()}%)`);
console.log(`Media das avaliacoes: ${mediaAvaliacoes()}`);
console.log(`Total de paginas lidas: ${totalPaginasLidas()}`);
console.log(`Melhores livros: ${melhoresLivros()}`);


function exibirPorDecada(): void {
  if (titulos.length === 0) {
    console.log('Nenhum livro cadastrado.');
    return;
  }

  const decadasDosLivros = anos.map((ano) => Math.floor(ano / 10) * 10);

  const decadasUnicas = Array.from(new Set(decadasDosLivros)).sort(
    (a, b) => a - b,
  );

  decadasUnicas.forEach((decada) => {
    const titulosDaDecada = titulos.filter(
      (_, i) => decadasDosLivros[i] === decada,
    );

    console.log(`${decada}s: ${titulosDaDecada.join(', ')}`);
  });
}

console.log('\n=== POR DECADA ===');
exibirPorDecada();

