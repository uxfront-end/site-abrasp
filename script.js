:root{
  --bg: #0b1220;
  --surface: #0f172a;
  --surface-2:#111827;
  --text: #e5e7eb;
  --muted:#94a3b8;
  --brand:#3b82f6;
  --brand-2:#22c55e;
  --card:#0a0f1a;
  --border:#1f2937;
  --shadow: 0 10px 30px rgba(0,0,0,.35);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0; font-family:Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--text); background:linear-gradient(180deg,#05070d, #0a1020 40%, #0a0f1a);
}

/* Utilidades */
.container{max-width:1180px; margin:0 auto; padding:0 20px;}
.section{padding:64px 0;}
.section.alt{background: linear-gradient(180deg, #0c1324, #0b1220);} 
.section-head{display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:24px;}
.section h2{margin:0; font-size:28px}
.link{color:var(--brand); text-decoration:none; font-weight:600}
.grid{display:grid; gap:20px}
.two-col{display:grid; grid-template-columns:1.1fr 0.9fr; gap:28px}
@media (max-width: 920px){ .two-col{grid-template-columns:1fr} }

/* Header/Nav */
.header{position:sticky; top:0; z-index:50; background:rgba(10,15,26,0.9); backdrop-filter: blur(8px); border-bottom:1px solid var(--border)}
.nav{display:flex; align-items:center; justify-content:space-between; height:64px}
.logo{display:flex; align-items:center; gap:10px; color:#fff; text-decoration:none; font-weight:700; letter-spacing:.2px}
.logo-mark{display:inline-grid; place-items:center; width:28px; height:28px; background:linear-gradient(135deg,var(--brand),var(--brand-2)); border-radius:8px}
.menu{display:flex; align-items:center; gap:16px}
.menu-toggle{display:none; background:none; color:#fff; border:1px solid var(--border); border-radius:10px; width:42px; height:42px}
.menu-lista{display:flex; list-style:none; gap:18px; margin:0; padding:0}
.menu-lista a{color:#cbd5e1; text-decoration:none; padding:10px 12px; border-radius:10px}
.menu-lista a:hover{background:rgba(255,255,255,0.06)}
@media (max-width: 860px){
  .menu-toggle{display:block}
  .menu-lista{position:absolute; top:64px; right:20px; flex-direction:column; background:#0a0f1a; border:1px solid var(--border); padding:12px; width:220px; border-radius:12px; display:none; box-shadow: var(--shadow);} 
  .menu-lista.is-open{display:flex}
}

/* Hero / Slider */
.hero{padding-top:8px;}
.slider{position:relative; border-radius:18px; overflow:hidden; height:56vh; min-height:360px; max-height:640px; border:1px solid var(--border); background:#000}
.slides{height:100%; display:grid}
.slide{grid-area:1/1; background-size:cover; background-position:center; opacity:0; transition:opacity .6s ease}
.slide.is-active{opacity:1}
.slider-btn{position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,.45); border:none; color:#fff; width:44px; height:44px; border-radius:50%; display:grid; place-items:center; cursor:pointer}
.slider-btn:hover{background:rgba(0,0,0,.65)}
.slider-btn.prev{left:12px}
.slider-btn.next{right:12px}
.dots{position:absolute; bottom:12px; left:0; right:0; display:flex; gap:8px; justify-content:center}
.dots button{width:10px; height:10px; border-radius:50%; border:none; background:rgba(255,255,255,.45); cursor:pointer}
.dots button.is-active{background:#fff}

/* Métricas (cards) */
.metrics{display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:18px}
.metric-card{display:flex; gap:12px; align-items:center; background:linear-gradient(180deg,#0a0f1a, #0b1220); border:1px solid var(--border); border-radius:14px; padding:16px; box-shadow: var(--shadow);} 
.metric-icon{display:grid; place-items:center; width:46px; height:46px; border-radius:12px; background:linear-gradient(135deg, rgba(59,130,246,.2), rgba(34,197,94,.2)); color:#9ecbff}
.metric-label{color:#9aa6b2; font-size:12px}
.metric-value{display:block; font-size:22px; font-weight:700}
@media (max-width: 920px){ .metrics{grid-template-columns:repeat(2,1fr)} }
@media (max-width: 520px){ .metrics{grid-template-columns:1fr} }

/* Cards de notícias */
.news-grid{grid-template-columns:repeat(3,1fr)}
.card{border:1px solid var(--border); border-radius:16px; overflow:hidden; background:linear-gradient(180deg,#0a0f1a, #0b1220); box-shadow: var(--shadow);} 
.card img{width:100%; height:190px; object-fit:cover}
.card-body{padding:16px}
.card-body h3{margin:0 0 8px 0; font-size:18px}
.btn-link{color:#a6e3a1; text-decoration:none; font-weight:600}
@media (max-width: 920px){ .news-grid{grid-template-columns:1fr 1fr} }
@media (max-width: 600px){ .news-grid{grid-template-columns:1fr} }

/* Cursos */
.courses-grid{grid-template-columns:repeat(3,1fr)}
.course-card{position:relative; border:1px solid var(--border); border-radius:16px; padding:16px; background:linear-gradient(180deg,#0a0f1a, #0b1220); box-shadow: var(--shadow);} 
.course-badge{position:absolute; top:12px; right:12px; background:linear-gradient(135deg,var(--brand),var(--brand-2)); color:#0b1220; font-weight:700; padding:6px 10px; border-radius:999px; font-size:12px}
.course-card h3{margin:8px 0}
.course-meta{color:var(--muted); font-size:14px; margin:8px 0 14px}
.btn{background:linear-gradient(135deg,var(--brand),var(--brand-2)); color:#0b1220; border:none; padding:10px 14px; border-radius:12px; font-weight:700; cursor:pointer}
.btn:hover{filter:brightness(1.05)}
@media (max-width: 920px){ .courses-grid{grid-template-columns:1fr 1fr} }
@media (max-width: 600px){ .courses-grid{grid-template-columns:1fr} }

/* Formadores */
.trainers-grid{grid-template-columns:repeat(3,1fr)}
.trainer-card{display:grid; grid-template-columns:96px 1fr; gap:14px; align-items:center; border:1px solid var(--border); border-radius:16px; padding:12px; background:linear-gradient(180deg,#0a0f1a, #0b1220); box-shadow: var(--shadow);} 
.trainer-card img{width:96px; height:96px; border-radius:12px; object-fit:cover}
.trainer-card h3{margin:0 0 6px 0}
.trainer-card .icons a{color:#9ecbff; margin-right:8px}
@media (max-width: 920px){ .trainers-grid{grid-template-columns:1fr 1fr} }
@media (max-width: 600px){ .trainers-grid{grid-template-columns:1fr} }

/* Imagem com legenda */
.image-figure{border:1px solid var(--border); border-radius:16px; overflow:hidden; background:#0a0f1a}
.image-figure img{display:block; width:100%; height:auto}
.image-figure figcaption{font-size:12px; color:#a1a1aa; padding:8px 12px}

/* Formulário */
.form .form-row{display:flex; flex-direction:column; gap:6px; margin-bottom:12px}
.form label{font-weight:600}
.form input, .form textarea{ 
  background:#0a0f1a; color:#fff; border:1px solid var(--border); border-radius:12px; padding:12px;
}
.form input:focus, .form textarea:focus{outline:2px solid rgba(59,130,246,.45)}
.form .error{color:#fca5a5; font-size:12px; min-height:16px}
.form-status{color:#a7f3d0; font-size:14px; margin-top:8px}

/* Mapa + contatos */
.map-embed{border-radius:16px; overflow:hidden; border:1px solid var(--border); margin-bottom:12px}
.map-embed iframe{width:100%; height:280px; border:0}
.contact-list{list-style:none; padding:0; margin:0; color:#cbd5e1}
.contact-list li{display:flex; align-items:center; gap:10px; padding:6px 0}

/* Footer */
.footer{border-top:1px solid var(--border); background:#0a0f1a; padding:22px 0; margin-top:24px}
.footer-inner{display:flex; align-items:center; justify-content:space-between}
.footer .social a{color:#9ecbff; margin-left:10px}

/* Voltar ao topo */
.to-top{position:fixed; right:18px; bottom:18px; width:42px; height:42px; display:grid; place-items:center; color:#0b1220; background:linear-gradient(135deg,var(--brand),var(--brand-2)); border-radius:12px; text-decoration:none; box-shadow:var(--shadow); opacity:.85}
.to-top:hover{opacity:1}

/* Acessibilidade visual */
.sr-only{position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0}
