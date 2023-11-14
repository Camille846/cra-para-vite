## Passo a passo para migrar create-react-app para Vite</h2>

- Instalar o Vite e Vite Plugin <code>npm install -D vite @vitejs/plugin-react</code>
```
npm install -D vite @vitejs/plugin-react
```
- Considerar baixar <code>vite-plugin-svgr</code> que transforma SVG em component React
- Criar arquivo de configuração do Vite: <code>vite.config.js</code>
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '',
    plugins: [react(), viteTsconfigPaths()],
    server: {    
        open: true, 
        port: 3000, 
    },
})
```
- Criar arquivo <code>vite-env.d.ts</code> para criar Vite Reference Types
```js
/// <reference types="vite/client" />
```
- Atualizar e mover o arquivo <code>index.html</code> para o diretório <code>public</code>
- Remover qualquer referência %PUBLIC_URL% do arquivo <code>index.html</code>
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```
- Adicionar módulo <code>script type = "module"</code> no arquivo <code>index.html</code>
```html
<script type="module" src="/src/index.tsx"></script>
```
- Remover create-react-app <code>npm uninstall react-scripts</code>
```
npm uninstall react-scripts
```
- Deletar <code>react-app-env.d.ts</code>
- Adicionar Vite ao <code>package.json</code>
```js
{  
  "scripts": {
    "start": "vite", // start dev server
    "build": "tsc && vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
},
```
- Atualizar <code>tsconfig.json</code>
```js
{  
    "compilerOptions": {    
        "lib": ["dom", "dom.iterable", "esnext"],    
        "target": "ESNext",    
        "types": ["vite/client"],
        "isolatedModules": true,
    },
 }
```

- Atualizar <code>process.env.REACT_APP_VARIABLE</code>

Antes:
```js
process.env.REACT_APP_VARIABLE
```

Depois:

```js
import.meta.env.REACT_APP_VARIABLE
```

- Atualizar variável em <code>process.env</code>

Antes:
```js
REACT_APP_API_BASE
```

Depois:

```js
VITE_APP_API_BASE
```
