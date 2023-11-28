# Migração create-react-app para Vite

1. [Introdução](#introdução)
2. [Principais Diferenças](#principais-diferenças)
   1. [Abordagem de Compilação](#abordagem-de-compilação)
   2. [Velocidade de Compilação](#velocidade-de-compilação)
   3. [Estrutura de Pasta](#estrutura-de-pasta)
   4. [Opções de Configuração](#opções-de-configuração)
   5. [Bibliotecas Externas](#bibliotecas-externas)
3. [Considerações de Escalabilidade](#considerações-de-escalabilidade)
4. [Passo a passo para migrar create-react-app para Vite](#passo-a-passo-para-migrar-create-react-app-para-vite)
5. [Conclusão](#conclusão)


## Introdução

Este guia destaca as razões para considerar a migração do Create React App (CRA) para o Vite, uma ferramenta de compilação de frontend. O Vite oferece uma abordagem mais rápida e moderna em comparação com o webpack, ferramenta utilizada pelo CRA no ecossistema JavaScript.

## Principais Diferenças

### Abordagem de Compilação

- **CRA:** Utiliza webpack, compilando todo o código antecipadamente, levando a tempos de compilação mais longos.

- **Vite:** Adota compilação em tempo de execução, compilando módulos individualmente sob demanda, resultando em tempos de compilação mais rápidos.

### Velocidade de Compilação

- **Vite:** Compilação rápida devido à abordagem em tempo de execução e uso de ESM (ECMAScript Modules).

- **CRA:** Compilação mais lenta, compilando todo o código a cada modificação.

### Estrutura de Pasta

- **Vite:** Estrutura simplificada com pastas "src" e "public".

- **CRA:** Além de "src", há outras pastas e arquivos que são gerados automaticamente pelo webpack durante a compilação do aplicativo, por exemplo, além de "public", há também a pasta "build".

### Opções de Configuração

- **Vite:** Configuração mínima com arquivo "vite.config.js" para personalizações.

- **CRA:** Oferece um conjunto amplo de opções e usa o arquivo "react-scripts" para configuração.

### Bibliotecas Externas

- **Vite:** Usa importação de módulos dinâmicos ESM para carregamento sob demanda.

- **CRA:** Suporta bibliotecas via npm, incluindo-as diretamente no código.

## Considerações de Escalabilidade

Ambas as ferramentas são capazes de lidar com projetos escaláveis, mas o Vite destaca-se pela velocidade de compilação e flexibilidade na estrutura de pasta.

## Velocidade de Compilação

O Vite é consistentemente mais rápido, evitando a necessidade de empacotamento antes de enviar para o navegador. Utiliza um servidor de desenvolvimento eficiente com cache inteligente.

## Babel

O Vite não precisa do Babel para transpilar código moderno, mas oferece suporte caso seja necessário para navegadores mais antigos.

# Passo a passo para migrar create-react-app para Vite

### 1. Ir ao <code>package.json</code> e substituir <code>react-scripts</code> por <code>vite</code>

- Antes

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
- Depois

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "dev": "vite",
    "start": "vite start",
    "build": "vite build",
    "serve": "vite preview"
  },
```
### 2. Instalar dependências

Remover pasta <code>node_modules</code> e instalar dependências
```
npm i
```
### 3. Instalar o Vite e Vite Plugin 
```
npm i vite @vitejs/plugin-react
```
#### obs: Considerar baixar <code>vite-plugin-svgr</code> que transforma SVG em component React

### 4. Criar arquivo de configuração do Vite: <code>vite.config.js</code>
```js
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [reactRefresh()],
})
```
### 5. Atualizar e mover o arquivo <code>index.html</code> fora do diretório <code>public</code>

### 6.Remover qualquer referência %PUBLIC_URL% do arquivo <code>index.html</code>
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```
### 7. Adicionar módulo <code>script type = "module"</code> no arquivo <code>index.html</code>
```html
<script type="module" src="/src/index.tsx"></script>
```

### 8. Atualizar <code>process.env.REACT_APP_VARIABLE</code>

Antes:
```js
process.env.REACT_APP_VARIABLE
```

Depois:

```js
import.meta.env.REACT_APP_VARIABLE
```

### 9. Atualizar variável em <code>process.env</code>

Antes:
```js
REACT_APP_API_BASE
```

Depois:

```js
VITE_APP_API_BASE
```
### 10. Rodando código para visualizar projeto

```js
npm run dev
```
## Conclusão

Em resumo, o Vite oferece vantagens significativas em termos de velocidade, flexibilidade e facilidade de configuração em comparação com o Create React App. No entanto, a escolha entre eles depende das necessidades específicas do projeto e da preferência por abordagens
