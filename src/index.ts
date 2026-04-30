
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

adicionarLivro('O Senhor dos Aneis', 'J.R.R. Tolkien', 1954, 1200);
adicionarLivro('Codigo Limpo', 'Robert C. Martin', 2008, 464);


adicionarLivro('Livro Errado', 'Autor X', -100, 200); 
adicionarLivro('Outro Errado', 'Autor Y', 2020, 0);    

removerLivro(2);

removerLivro(99);

console.log('\n--- Estado final ---');



