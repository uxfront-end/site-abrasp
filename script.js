// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-lista');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Carrossel simples (autoplay + botões + pontos)
(function initSlider(){
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.slide')];
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const dotsWrap = slider.querySelector('.dots');

  let idx = 0;
  let timer;

  function goTo(i){
    slides[idx].classList.remove('is-active');
    if (dotsWrap.children[idx]) dotsWrap.children[idx].classList.remove('is-active');
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('is-active');
    if (dotsWrap.children[idx]) dotsWrap.children[idx].classList.add('is-active');
  }

  // Pontos
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    if (i === 0) b.classList.add('is-active');
    b.addEventListener('click', () => {
      stop(); goTo(i); start();
    });
    dotsWrap.appendChild(b);
  });

  function nextSlide(){ goTo(idx + 1); }
  function prevSlide(){ goTo(idx - 1); }

  function start(){
    stop();
    timer = setInterval(nextSlide, 5000);
  }
  function stop(){
    if (timer) clearInterval(timer);
  }

  next.addEventListener('click', () => { stop(); nextSlide(); start(); });
  prev.addEventListener('click', () => { stop(); prevSlide(); start(); });
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  start();
})();

// Contadores animados
function animateCounters(){
  const els = document.querySelectorAll('.metric-value');
  if (!('IntersectionObserver' in window)){
    // fallback simples
    els.forEach(el => el.textContent = Number(el.getAttribute('data-target')||0).toLocaleString('pt-BR'));
    return;
  }
  const opts = { threshold: 0.3 };
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.getAttribute('data-target')) || 0;
      const dur = 1200; // ms
      const start = performance.now();
      function tick(t){
        const p = Math.min((t - start)/dur, 1);
        const val = Math.floor(target * (0.2 + 0.8 * p*p)); // easing suave
        el.textContent = val.toLocaleString('pt-BR');
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, opts);
  els.forEach(el => obs.observe(el));
}
animateCounters();

// Validação simples do formulário
const form = document.getElementById('contato-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const required = ['nome','email','assunto','mensagem'];
    required.forEach(id => {
      const input = document.getElementById(id);
      const error = input.nextElementSibling;
      if (!input.value.trim()){
        ok = false;
        error.textContent = 'Campo obrigatório.';
      } else {
        error.textContent = '';
      }
      if (id === 'email' && input.value){
        const re = /\S+@\S+\.\S+/;
        if (!re.test(input.value)){ ok = false; error.textContent = 'E-mail inválido.'; }
      }
    });

    const status = form.querySelector('.form-status');

    if (!ok){
      status.textContent = 'Verifique os campos destacados.';
      status.style.color = '#fecaca';
      return;
    }

    // Simulação de envio (integre com Formspree, back-end ou e-mail posteriormente)
    status.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    status.style.color = '#a7f3d0';
    form.reset();
  });
}

//Tabela de busca de formadoeres

    //function atualizarContagem(mostradas) {
      //const n = mostradas;
      //badge.textContent = n === 1 ? "1 resultado" : `${n} resultados`;
    //}

    //function filtrar() {
      //const termo = normalize(input.value);
      //let visiveis = 0;

     // linhas.forEach((tr) => {
        //const nome = normalize(tr.cells[0].textContent);
        //const mostrar = termo === "" || nome.includes(termo);
        //tr.style.display = mostrar ? "" : "none";
        //if (mostrar) visiveis++;
      //});

     // noResultsRow.style.display = visiveis === 0 ? "" : "none";
      //atualizarContagem(visiveis);
   // }//

    // Eventos
    //input.addEventListener("input", filtrar);

    // Estado inicial
    //filtrar();*//
  
