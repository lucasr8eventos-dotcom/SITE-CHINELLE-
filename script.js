/* ============================================================
   CHINELÊ BY MADUZZI — catálogo de produtos
   Edite/adicione produtos neste arquivo. Os preços são em R$.
   ============================================================ */

const PRODUCTS = [
  {name:"Sandália Salto Bloco Nude", brand:"Maduzzi", cat:"sandalias", price:189.90, tag:"Novidade",
   sizes:["34","35","36","37","38","39"], colors:[["Nude","#E3DBCC"],["Preto","#101010"],["Off white","#FDFCF8"]]},
  {name:"Sandália Tiras Prata", brand:"Maduzzi", cat:"sandalias", price:219.90, tag:"",
   sizes:["35","36","37","38","39"], colors:[["Prata","#C2BFB6"],["Champagne","#D8C7A6"]]},
  {name:"Rasteirinha Trançada", brand:"", cat:"rasteirinhas", price:129.90, tag:"",
   sizes:["34","35","36","37","38"], colors:[["Off white","#FDFCF8"],["Nude","#E3DBCC"],["Preto","#101010"]]},
  {name:"Rasteirinha Fivela Dourada", brand:"", cat:"rasteirinhas", price:139.90, tag:"Promoção", oldPrice:179.90,
   sizes:["35","36","37","38","39"], colors:[["Champagne","#D8C7A6"],["Preto","#101010"]]},
  {name:"Chinelo Slide Conforto", brand:"Maduzzi", cat:"chinelos", price:99.90, tag:"",
   sizes:["34","35","36","37","38","39"], colors:[["Off white","#FDFCF8"],["Nude","#E3DBCC"],["Preto","#101010"]]},
  {name:"Chinelo Tira Acolchoada", brand:"", cat:"chinelos", price:109.90, tag:"Novidade",
   sizes:["35","36","37","38"], colors:[["Nude","#E3DBCC"],["Prata","#C2BFB6"]]},
  {name:"Tênis Casual Minimal", brand:"Maduzzi", cat:"tenis", price:259.90, tag:"",
   sizes:["34","35","36","37","38","39"], colors:[["Off white","#FDFCF8"],["Cinza","#B9B7B0"]]},
  {name:"Tênis Chunky Branco", brand:"", cat:"tenis", price:299.90, tag:"",
   sizes:["35","36","37","38","39"], colors:[["Off white","#FDFCF8"],["Nude","#E3DBCC"]]},
  {name:"Bolsa Estruturada Couro", brand:"Maduzzi", cat:"bolsas", price:329.90, tag:"Novidade",
   sizes:["Único"], colors:[["Preto","#101010"],["Nude","#E3DBCC"],["Champagne","#D8C7A6"]]},
  {name:"Bolsa Baguete Acetinada", brand:"", cat:"bolsas", price:249.90, tag:"",
   sizes:["Único"], colors:[["Prata","#C2BFB6"],["Off white","#FDFCF8"]]},
  {name:"Cinto Fino Metalizado", brand:"", cat:"acessorios", price:79.90, tag:"",
   sizes:["P","M","G"], colors:[["Prata","#C2BFB6"],["Preto","#101010"]]},
  {name:"Lenço de Seda", brand:"", cat:"acessorios", price:89.90, tag:"Promoção", oldPrice:119.90,
   sizes:["Único"], colors:[["Off white","#FDFCF8"],["Nude","#E3DBCC"],["Champagne","#D8C7A6"]]},
];

function renderProducts(){
  const grid = document.getElementById("productGrid");
  if(!grid) return;
  grid.innerHTML = PRODUCTS.map(p=>{
    const label = p.name.toLowerCase();
    const tagHtml = p.tag
      ? `<span class="product-tag ${p.tag==="Promoção"?"dark":""}">${p.tag}</span>` : "";
    const sizes = p.sizes.map((s,i)=>`<button class="chip${i===0?" sel":""}">${s}</button>`).join("");
    const colors = p.colors.map((c,i)=>`<button class="swatch${i===0?" sel":""}" data-color="${c[0]}" style="background:${c[1]}" title="${c[0]}" aria-label="${c[0]}"></button>`).join("");
    const priceHtml = p.oldPrice
      ? `<s>${money(p.oldPrice)}</s>${money(p.price)}`
      : money(p.price);
    return `
    <article class="product" data-cat="${p.cat}" data-name="${p.name}" data-brand="${p.brand}" data-price="${p.price}" data-label="${label}">
      <div class="ph" data-label="${label}" style="position:relative">${tagHtml}</div>
      ${p.brand?`<div class="brand">${p.brand}</div>`:`<div class="brand">Chinelê</div>`}
      <h3>${p.name}</h3>
      <div class="price">${priceHtml}</div>

      <div class="opt-row sizes"><span class="opt-label">Tamanho</span>${sizes}</div>
      <div class="opt-row colors"><span class="opt-label">Cor</span>${colors}</div>

      <div class="opt-row" style="align-items:center;margin-bottom:0">
        <span class="opt-label">Quantidade</span>
        <div class="qty"><button class="minus" aria-label="Diminuir">–</button><span>1</span><button class="plus" aria-label="Aumentar">+</button></div>
      </div>

      <div class="product-actions">
        <button class="btn btn--sm add">Adicionar à sacola</button>
        <button class="btn btn--sm btn--ghost buy-direct" aria-label="Comprar pelo WhatsApp" title="Comprar pelo WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14c-.2.7-1.2 1.3-2 1.4-.5.1-1.2.2-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.3-1.7-1.3-3.3s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.2 1.3 1.1 2.3 1.4 2.6 1.6.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.4.1.2.1.8-.1 1.1Z"/></svg>
        </button>
      </div>
    </article>`;
  }).join("");
}

function money(n){ return n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }

/* ============================================================
   CHINELÊ BY MADUZZI — carrinho + finalização WhatsApp
   ============================================================ */

/* >>> TROQUE pelo WhatsApp da loja (formato internacional, só números) <<< */
const WHATSAPP = "5561999999999";
const STORE = "Chinelê by Maduzzi";

const BRL = money;

/* ---------- Estado ---------- */
let cart = [];
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- Seleção de opções nos cards ---------- */
function initProductOptions(){
  $$(".product").forEach(card=>{
    // tamanho / cor — clique seleciona
    card.querySelectorAll(".chip").forEach(c=>{
      c.addEventListener("click",()=>{
        c.parentElement.querySelectorAll(".chip").forEach(x=>x.classList.remove("sel"));
        c.classList.add("sel");
      });
    });
    card.querySelectorAll(".swatch").forEach(s=>{
      s.addEventListener("click",()=>{
        s.parentElement.querySelectorAll(".swatch").forEach(x=>x.classList.remove("sel"));
        s.classList.add("sel");
      });
    });
    // quantidade
    let qtyEl = card.querySelector(".qty span");
    card.querySelector(".qty .minus").addEventListener("click",()=>{
      let v = Math.max(1, +qtyEl.textContent - 1); qtyEl.textContent = v;
    });
    card.querySelector(".qty .plus").addEventListener("click",()=>{
      qtyEl.textContent = +qtyEl.textContent + 1;
    });
    // adicionar
    card.querySelector(".add").addEventListener("click",()=>addToCart(card));
    // comprar direto
    const direct = card.querySelector(".buy-direct");
    if(direct) direct.addEventListener("click",()=>{ addToCart(card,true); });
  });
}

function addToCart(card, openWhatsApp=false){
  const name  = card.dataset.name;
  const brand = card.dataset.brand || "";
  const price = +card.dataset.price;
  const label = card.dataset.label;
  const size  = card.querySelector(".sizes .chip.sel")?.textContent.trim() || "—";
  const colorEl = card.querySelector(".colors .swatch.sel");
  const color = colorEl?.dataset.color || "—";
  const qty   = +card.querySelector(".qty span").textContent;

  const key = `${name}|${size}|${color}`;
  const existing = cart.find(i=>i.key===key);
  if(existing) existing.qty += qty;
  else cart.push({key,name,brand,price,size,color,qty,label});

  renderCart();
  toast(`${name} adicionado à sacola`);
  if(openWhatsApp) finishWhatsApp();
  else openCart();
}

function removeItem(key){ cart = cart.filter(i=>i.key!==key); renderCart(); }
function changeQty(key,d){
  const it = cart.find(i=>i.key===key);
  if(!it) return;
  it.qty = Math.max(1,it.qty+d);
  renderCart();
}

/* ---------- Render ---------- */
function renderCart(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  // badge
  const badge = $(".cart-count");
  badge.textContent = count;
  badge.classList.toggle("show", count>0);
  $("#cartCountLbl").textContent = count===1 ? "1 item" : `${count} itens`;

  const body = $(".cart-body");
  if(!cart.length){
    body.innerHTML = `<div class="cart-empty">
      <svg class="ph-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
        <path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
      <p>Sua sacola está vazia.</p>
      <p style="font-size:12px">Explore a coleção e monte seu pedido.</p></div>`;
    $(".cart-foot").style.display="none";
    return;
  }
  $(".cart-foot").style.display="block";
  body.innerHTML = cart.map(i=>`
    <div class="cart-item">
      <div class="ci-img ph" data-label="${i.label}"></div>
      <div>
        <div class="ci-name">${i.name}</div>
        <div class="ci-meta">Tam. ${i.size} · ${i.color}</div>
        <div class="ci-qty">
          <button data-act="dec" data-key="${i.key}" aria-label="Diminuir">–</button>
          <span>${i.qty}</span>
          <button data-act="inc" data-key="${i.key}" aria-label="Aumentar">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between">
        <div class="ci-price">${BRL(i.price*i.qty)}</div>
        <button class="ci-remove" data-act="remove" data-key="${i.key}">Remover</button>
      </div>
    </div>`).join("");

  $("#cartSubtotal").textContent = BRL(total);
  $("#cartTotal").textContent = BRL(total);
}

/* ---------- WhatsApp ---------- */
function finishWhatsApp(){
  if(!cart.length){ toast("Adicione produtos antes de finalizar"); return; }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  let msg = `Olá! Vim pelo site da ${STORE} e gostaria de finalizar meu pedido:\n`;
  cart.forEach((i,idx)=>{
    msg += `\n*Produto ${idx+1}:* ${i.name}${i.brand?` (${i.brand})`:""}\n`;
    msg += `Tamanho: ${i.size}\nCor: ${i.color}\nQuantidade: ${i.qty}\n`;
    msg += `Valor: ${BRL(i.price*i.qty)}\n`;
  });
  msg += `\n*Total estimado:* ${BRL(total)}\n`;
  msg += `\nMeu nome: \nCidade/UF: \nForma de entrega: retirada / envio\n`;
  msg += `\nPode confirmar a disponibilidade?`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank");
}

/* ---------- Drawer ---------- */
function openCart(){ $(".cart").classList.add("open"); $(".overlay").classList.add("open"); document.body.style.overflow="hidden"; }
function closeCart(){ $(".cart").classList.remove("open"); $(".overlay").classList.remove("open"); document.body.style.overflow=""; }

/* ---------- Toast ---------- */
let toastTimer;
function toast(text){
  const t = $("#toast");
  $("#toastText").textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"),2600);
}

/* ---------- Filtro de vitrine ---------- */
function initFilters(){
  $$(".filter-bar button").forEach(b=>{
    b.addEventListener("click",()=>{
      $$(".filter-bar button").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      const f = b.dataset.filter;
      $$(".product").forEach(p=>{
        p.style.display = (f==="all"||p.dataset.cat===f) ? "flex":"none";
      });
    });
  });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu(){
  const mm = $(".mobile-menu");
  $(".menu-toggle").addEventListener("click",()=>{mm.classList.add("open");document.body.style.overflow="hidden"});
  $(".mobile-close").addEventListener("click",closeMobile);
  mm.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMobile));
  function closeMobile(){mm.classList.remove("open");document.body.style.overflow=""}
}

/* ---------- Header shadow ---------- */
function initHeader(){
  const h = $(".header");
  window.addEventListener("scroll",()=>{
    h.style.boxShadow = window.scrollY>20 ? "0 6px 30px rgba(16,16,16,.06)" : "none";
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  renderProducts();
  initProductOptions();
  initFilters();
  initMobileMenu();
  initHeader();
  renderCart();

  $$(".open-cart").forEach(b=>b.addEventListener("click",openCart));
  $(".cart-close").addEventListener("click",closeCart);
  $(".overlay").addEventListener("click",closeCart);
  $$(".finish-wa").forEach(b=>b.addEventListener("click",finishWhatsApp));

  // Delegação de eventos no carrinho (robusto a qualquer caractere na chave)
  $(".cart-body").addEventListener("click",e=>{
    const btn = e.target.closest("[data-act]");
    if(!btn) return;
    const key = btn.dataset.key;
    if(btn.dataset.act==="inc") changeQty(key,1);
    else if(btn.dataset.act==="dec") changeQty(key,-1);
    else if(btn.dataset.act==="remove") removeItem(key);
  });
});
