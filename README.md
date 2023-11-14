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
