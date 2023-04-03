/**
    Cli tools javascript são ferramentas que servem para facilitar a criação de projetos que fazem do node,
  com a escolha de algumas opções o projeto já fica pronto para o desenvolvimento. A forma mais simples de criar 
  um projeto em react é usando a ferramenta Create react app, com o comando no terminal "npx create-react-app 'nome do app'",
  onde create vem de criar, a ferramenta irá gerar um prejeto em react basico.
    Outra forma mais avançada de criar um projeto em react é usando Vite, o Vite é uma build tool voltada para
  aprimorar a experiecia do desenvolvedor atrávez de um desenvolvimento mais rapido e exuto do projeto, além disso
  ao fazer uso do vite na criaçao do projeto, é possivel personalizar o projeto antes de gera-lo, ao selecionar
  algumas das opções disponibilizadas pelo Vite.
*/

//Cli tool Create react app
/**
  Para gerar um projeto usando o Create react app é bastante simples, basta executar um dos seguintes comandos:
  
  a. npx create-react-app 'nome do app'
    o npx vem por padrão a partir da versão npm 5.2+;
  b. npm init react-app 'nome do app';
    a inicialização via npm está disponivel a partir da versão npm 6+
  c. yarn create react-app 'nome do app'
    o yarn create está disponivel a partir da versão Yarn 0.25+
  
    Assim como o Vite o Create react app também aceita alguns templates, basta adicionar no final do comando
  de criação visto acima os seguintes comandos: --template [template-name]
*/

//Cli tool Vite
/**
  Para gerar um projeto usando o Vite alguns passos são necessarios:
  
  1. Instalar o vite na sua maquina, atravez do comando:
    a. npm create vite@latest;
    b. yarn create vite;
    c. pnpm create vite.
  2. Criar um projeto com o comando:
    # npm 6.x
    a. npm create vite@latest 'nome do app' --template 'template a ser usado';
    
    # npm 7+, extra double-dash is needed:
    b. npm create vite@latest 'nome do app' -- --template 'template a ser usado';
    
    # yarn
    c. yarn create vite 'nome do app' --template 'template a ser usado';
    
    # pnpm
    d. pnpm create vite 'nome do app' --template 'template a ser usado'.
    
  Os templates disponiveis para o Vite são:
  vue-ts, react, react-ts, react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts.

  Site do Vite
  https://vitejs.dev/guide/ 
*/