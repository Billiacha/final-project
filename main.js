// Shared JS: nav toggle, year injector, form validation
function wireNav(toggleId, navId){
const btn = document.getElementById(toggleId);
const nav = document.getElementById(navId);
if(!btn||!nav) return;
btn.addEventListener('click', ()=>{
nav.classList.toggle('open');
});
// close on link click (mobile)
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>nav.classList.remove('open')));
}


// try multiple ids (pages have different ids to avoid duplicate id issues)
wireNav('nav-toggle','nav');
wireNav('nav-toggle-2','nav-2');
wireNav('nav-toggle-3','nav-3');
wireNav('nav-toggle-4','nav-4');


// inject year
const y = new Date().getFullYear();
['year','year-2','year-3','year-4'].forEach(id=>{const el=document.getElementById(id);if(el) el.textContent = y});


// Form validation for contact page
const form = document.getElementById('contact-form');
if(form){
const status = document.getElementById('form-status');
form.addEventListener('submit', (e)=>{
e.preventDefault();
if(form.checkValidity()){
// simulate send
status.textContent = 'Sending...';
setTimeout(()=>{ status.textContent = 'Message sent! Thank you.'; form.reset(); }, 700);
} else {
status.textContent = 'Please fix the errors and try again.';
form.reportValidity();
}
});
}