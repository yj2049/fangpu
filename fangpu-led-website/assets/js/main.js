document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  const current=document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===current)a.classList.add('active');});
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});revealEls.forEach(el=>io.observe(el));}else revealEls.forEach(el=>el.classList.add('visible'));
  const back=document.querySelector('.back-top');
  const onScroll=()=>{if(back)back.classList.toggle('show',window.scrollY>420);};window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(back)back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.product-card[data-category]').forEach(card=>card.classList.toggle('is-hidden',f!=='all'&&card.dataset.category!==f));}));
  const form=document.querySelector('#inquiry-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const box=document.querySelector('.form-success');if(box){box.textContent='信息已在当前页面完成校验。此网站为静态版本，尚未连接邮件或CRM系统；上线前请配置表单接收接口。';box.classList.add('show');}form.reset();});}
});
