## Passo a passo para migrar create-react-app para Vite</h2>

- Instalar o Vite e Vite Plugin <code>npm install -D vite @vitejs/plugin-react</code>
- Considerar baixar <code>vite-plugin-svgr</code> que transforma SVG em component React
- Criar arquivo de configuração do Vite: <code>vite.config.js</code>
- Criar arquivo <code>vite-env.d.ts</code> para criar Vite Reference Types
- Atualizar e mover o arquivo <code>index.html</code> para o diretório <code>public</code>
- Remover qualquer referência %PUBLIC_URL% do arquivo <code>index.html</code>
- Adicionar módulo <code>script type = "module"</code> no arquivo <code>index.html</code>
- Remover create-react-app <code>npm uninstall react-scripts</code>
- Deletar <code>react-app-env.d.ts</code>
- Adicionar Vite ao <code>package.json</code>
- Atualizar <code>tsconfig.json</code>
