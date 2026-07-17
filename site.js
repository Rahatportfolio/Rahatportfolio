(function(){
  const root=document.documentElement, body=document.body;
  const theme=document.querySelector('#themeToggle');
  function setTheme(t){root.dataset.theme=t;root.classList.toggle('light',t==='light');body.classList.toggle('light',t==='light');if(theme)theme.textContent=t==='light'?'☾':'☼';localStorage.setItem('rahat-theme',t)}
  setTheme(localStorage.getItem('rahat-theme')||'dark');
  if(theme) theme.onclick=()=>setTheme(root.dataset.theme==='light'?'dark':'light');
  const menu=document.querySelector('#menuToggle'),links=document.querySelector('#navLinks');
  if(menu&&links){menu.onclick=()=>{links.classList.toggle('open');menu.textContent=links.classList.contains('open')?'×':'☰'};links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'))}
  window.addEventListener('load',()=>document.querySelector('#pageLoader')?.classList.add('done'));
})();
