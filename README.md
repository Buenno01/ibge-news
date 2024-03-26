# IBGE news

Este projeto é uma aplicação web de notícias que consome dados da API do IBGE e os renderiza na tela. Ele foi construído utilizando diversas tecnologias e técnicas modernas, incluindo Tailwind CSS para estilos e responsividade, Context API para gerenciamento do estado global, React Icons para ícones de interface, Framer Motion para animações de carregamento e Vite como compilador.

## Como Construir e Rodar o Projeto Localmente

### Usando node
<details>
<summary>Ver passos</summary>

> [!IMPORTANT]
> ### Pré-requisitos
> Node.js instalado (v14.0.0 ou superior)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/Buenno01/ibge-news.git
```

2. Acesse o diretório do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
yarn install
```

ou, se estiver utilizando npm:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```
ou, com npm:

```bash
npm run dev
```
Abra seu navegador e acesse [http://localhost:5173](http://localhost:5173) para ver o aplicativo em execução.

</details>

### Usando o docker
<details>
<summary>Ver passos</summary>

> [!IMPORTANT]
> ### Pré-requisitos
> Docker instalado

### Passos

1. Com o docker instalado, execute o comando:
```bash
docker run -p 3000:80 buenno01/ibge-news:v1
```
2. Abra o navegador na página [http://localhost:3000](http://localhost:3000)
</details>


## Escolhas de Ferramentas

<details>
<summary>Expandir</summary>


### Tailwind CSS
Utilizado devido à sua abordagem de estilo baseada em classes, que facilita a criação de estilos consistentes e responsivos rapidamente.

### Context API
Utilizado para gerenciamento do estado global da aplicação, permitindo compartilhar dados entre componentes de forma eficiente e sem a necessidade de bibliotecas externas.

### React Icons
Oferece uma vasta gama de ícones prontos para uso, o que economiza tempo no desenvolvimento de interfaces.

### Framer Motion
Utilizado para adicionar animações de carregamento, proporcionando uma experiência mais fluida e agradável para o usuário.

### Vite
Escolhido como ambiente de desenvolvimento devido ao seu suporte para TypeScript e React.js
</details>

## Histórico e Workflow de Git

Este projeto utiliza o Git como sistema de controle de versão. O workflow básico segue os seguintes passos:

### Branches:
- `main`: Branch principal, contendo a versão estável do projeto.
- `<nome da pagina>/feature`: Branches para desenvolvimento de novas funcionalidades, criadas a partir da main.

### Fluxo de Trabalho:
- O desenvolvimento de novas funcionalidades e correções é realizado em branches separadas.
- Após a conclusão do trabalho, é feito um pull request para mesclar as alterações na branch main, quando uma versão estável é alcançada.

Ao seguir este fluxo de trabalho, é possível manter um código mais organizado, com alterações sendo integradas de forma controlada e revisada antes de serem incorporadas à versão principal do projeto.