# 📖 Relatório - Projeto Pokedex Acadêmica

## 📌 1. Propósito da Aplicação

A aplicação desenvolvida é uma **Pokedex**, uma página web que consome a API pública da PokéAPI para listar Pokémons.

O objetivo principal é **acadêmico**, como parte de um exercício proposto durante o curso de Frontend do \<DevQuest\>.

### O foco foi aplicar conceitos de

- React com gerenciamento de estados
- React Router para navegação entre páginas
- Context API para gerenciamento de tema (light/dark)
- Styled-components para estilização de componentes
- Testes unitários com Jest e React Testing Library
- Estruturação de código seguindo boas práticas de manutenção

---

## 📋 2. Funcionalidades Entregues

### Funcionalidades principais

- **Página Inicial (Home):**
  - Cabeçalho fixo com link para retornar à página inicial.
  - Lista inicial com **10 Pokémons**.
  - **Botão "Load more"** para carregar mais 10 Pokémons por clique.
  - **Filtro por tipo de Pokémon:**
  - Dropdown permite selecionar um ou mais tipos de Pokémon (ex.: Fire, Water).
  - Ao selecionar um ou mais tipos, a aplicação já carrega automaticamente **10 Pokémons de cada tipo selecionado**, mesmo que eles ainda não estivessem previamente listados.
  - O usuário pode continuar carregando mais Pokémons daquele tipo clicando em **"Load More"**.
  - Permite combinação de múltiplos tipos ao mesmo tempo.
  - **Botão "Clear Filters" (Limpar filtros):**
    - Só aparece quando um filtro estiver aplicado.
  - **Botão de troca de tema (light/dark).**

- **Página de Detalhes de um Pokémon:**
  - Exibe informações detalhadas como:
    - Nome
    - Tipos
    - Habilidades
    - Movimentos (com lista inicial de 20 movimentos e botão **"Load More"** para carregar mais)
    - **Status base (stats)**: Incluindo **HP**, **Ataque**, **Defesa**, **Ataque Especial**, **Defesa Especial** e **Velocidade**

### Funcionalidades Extras

- Testes unitários com Jest e React Testing Library.
- Componentes reutilizáveis organizados por pastas (ex.: botões, cabeçalho).
- Filtro dinâmico por tipo de Pokémon com **carregamento automático ao selecionar**.
- Tema com Context API e troca visual em tempo real.

---

## 🛠️ 3. Ferramentas Utilizadas e Justificativas

| Ferramenta                       | Motivo da Escolha                                      |
|----------------------------------|--------------------------------------------------------|
| **React**                        | Framework orientado no desafio e ideal para SPAs.      |
| **Styled-components**            | Facilita a criação de estilos isolados por componente. |
| **React Router DOM**             | Para navegação entre páginas (Home e Detalhes).        |
| **Jest + React Testing Library** | Realização de testes unitários.                        |
| **Context API (React)**          | Controle global do tema (dark/light).                  |
| **Babel**                        | Necessário para compatibilidade do Jest com ES6+.      |
| **Vite**                         | Ferramenta moderna para build e desenvolvimento rápido.|
|**Font Awesome**                  | Utilizado para exibir o ícone de "Home" no cabeçalho.  |

### Motivo Geral das Escolhas

As tecnologias foram indicadas no enunciado do desafio, mas também escolhidas por serem modernas, com carregamento rápido e boas práticas de organização e escalabilidade.

---

## 🧱 4. Decisões Técnicas e Justificativas

- **Organização de código:**
  - Inicialmente os styled-components estavam dentro de cada componente, mas isso tornou o código extenso.
  - Decidi centralizar todos os styled-components na pasta `/src/Styles` para melhor organização.

- **Estrutura de Pastas:**
  - Componentes reutilizáveis como botões e o header estão dentro de `/src/components`.
  - As páginas principais (`Home`, `Detalhes`) estão em `/src/pages`.
  - Contexto de tema está em `/src/context`.

- **Padronização:**
  - Segui boas práticas de separação por responsabilidade.
  - A estruturação facilita manutenção, escalabilidade e leitura do código.

- **Decisão sobre serviços (API):**

  - Para centralizar e organizar todas as chamadas à PokéAPI, foi criada a pasta /src/services.

  - Dentro dela estão funções responsáveis por buscar Pokémons, tipos e detalhes.

  - Essa separação ajuda a deixar os componentes focados apenas na renderização e na lógica de interface, enquanto as requisições externas ficam isoladas.

---

## 📂 5. Estrutura de Pastas (Resumo)

- /src
- /components → Componentes reutilizáveis (Botões, Header, etc)
- /context → Context API para o tema
- /pages → Páginas principais (Home, Detalhes)
- /services → Arquivos responsáveis pelas requisições à PokéAPI
- /Styles → Styled-components centralizados
- /tests → Testes unitários (se houver mais separados)
- jest.config.js → Configuração do Jest
- babel.config.js → Configuração do Babel
- vite.config.js → Configuração do Vite
- .gitignore → Ignora node_modules, dist, logs, configs de IDE, etc

---

## ▶️ 6. Passo a Passo para Rodar o Projeto Localmente

### Pré-requisitos

- Ter o **Node.js** e o **npm** instalados na máquina.

### Clonar o repositório

```bash
git clone [URL_DO_REPOSITORIO]
cd nome-do-projeto
```

## Instalar as dependências

```bash
npm install
```

Observação: O projeto utiliza Vite, mas não é necessário ter Vite globalmente. O comando npm install já inclui o Vite localmente.

## Rodar o projeto (Vite Dev Server)

```bash
npm run dev
```

## Rodar os testes com Jest

```bash
npm run test
```

---

## ⚙️ 7. Outras Configurações Importantes

### Durante a implementação foi necessário instalar e configurar

- Jest
- Babel
- styled-components
- react-router-dom
- Font Awesome
- Context API (React)

### As configurações estão nos seguintes arquivos

- jest.config.js
- babel.config.js
- vite.config.js
- .gitignore

### O .gitignore está configurado para ignorar

- node_modules/
- dist/
- logs/
- Arquivos de configuração de IDEs como .vscode/, .idea/, entre outros.

---
