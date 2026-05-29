# Chinelê by Maduzzi — Site

Vitrine digital premium de calçados, bolsas e acessórios femininos em Brasília.
Carrinho funcional + finalização do pedido pelo WhatsApp. HTML/CSS/JS puro, leve e otimizado para SEO local.

## Arquivos
- `index.html` — páginas e seções do site
- `styles.css` — estilos (paleta da marca + tipografia)
- `script.js` — catálogo de produtos + carrinho + WhatsApp
- `assets/logo-chinele.jpg` — logo

## Como publicar no GitHub
1. Faça upload de todos os arquivos (mantendo a pasta `assets/`) no repositório.
2. Em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)` para publicar com GitHub Pages.

## O que personalizar antes de divulgar

### 1) Número do WhatsApp  (obrigatório)
No topo do `script.js`:
```js
const WHATSAPP = "5561999999999"; // troque pelo número real (formato: 55 + DDD + número)
```

### 2) Fotos dos produtos e seções
As áreas listradas são placeholders. Substitua por imagens reais.
- **Produtos:** edite a lista `PRODUCTS` no `script.js` e adicione um campo `img` apontando para sua foto (ex.: `assets/produtos/sandalia-nude.jpg`). Depois troque o placeholder `.ph` por uma `<img>` no template, se desejar.
- **Hero / categorias / institucional:** os blocos com classe `ph` no `index.html` marcam onde entram as imagens. Use texto alternativo com termos de SEO (ex.: "sandália feminina em Brasília").

### 3) Contato
- Instagram: já configurado como **@chineledf**
- WhatsApp: ver item 1
- Localização: botão "Ver no Google Maps" já aponta para o link da loja
- Endereço escrito, horário e formas de pagamento: ajuste no rodapé do `index.html`

## SEO
- Meta title/description e dados estruturados (`ShoeStore`) já incluídos.
- Palavras-chave locais (Brasília, Vicente Pires, Águas Claras, Taguatinga) distribuídas naturalmente no texto.
- Lembre de atualizar a URL canônica em `index.html` (`<link rel="canonical">`) para o domínio final.

## Editar produtos
Toda a vitrine vem da lista `PRODUCTS` no início do `script.js`. Cada item:
```js
{
  name:"Nome do produto",
  brand:"Maduzzi",        // ou "" se não houver
  cat:"sandalias",        // sandalias | rasteirinhas | chinelos | tenis | bolsas | acessorios
  price:189.90,
  tag:"Novidade",         // "Novidade" | "Promoção" | "" (sem etiqueta)
  oldPrice:229.90,        // opcional — mostra preço riscado
  sizes:["35","36","37"],
  colors:[["Nude","#E3DBCC"],["Preto","#101010"]]
}
```
