const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('request-form').addEventListener('submit',event=>{event.preventDefault();const form=new FormData(event.currentTarget);const message=[`Hallo Atelier Nica, ich möchte eine Anfrage stellen.`,`Name: ${form.get('name')}`,`Telefon: ${form.get('phone')}`,`Anliegen: ${form.get('subject')}`,`Details: ${form.get('details')||'Keine weiteren Angaben'}`].join('\n');window.open(`https://wa.me/4915254611201?text=${encodeURIComponent(message)}`,'_blank','noopener');});
