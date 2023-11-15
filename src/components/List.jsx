import React from 'react';

export const List = () => {
    return (
      <div>
        <h2>Passo a passo para migrar create-react-app para Vite</h2>
        <ul>
            <li>Remover create-react-app <code>npm uninstall react-scripts</code></li>
            <li>Instalar dependências</li>
            <li>Instalar o Vite e Vite Plugin <code>npm install -D vite @vitejs/plugin-react</code></li>
            <li>Considerar baixar <code>vite-plugin-svgr</code> que transforma SVG em component React</li>
            <li>Criar arquivo de configuração do Vite: <code>vite.config.js</code>
            </li>
            <li>Atualizar e mover o arquivo <code>index.html</code></li>
            <li>Remover qualquer referência %PUBLIC_URL% do arquivo <code>index.html</code></li>
            <li>Adicionar módulo <code>script type = "module"</code> no arquivo <code>index.html</code></li>
            <li>Atualizar <code>process.env.REACT_APP_VARIABLE</code></li>
            <li>Atualizar variável em <code>process.env</code></li>
        </ul>
      </div>
    );
  };
