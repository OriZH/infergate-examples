const tabs=[...document.querySelectorAll('[data-tab]')];
function activate(tab){
  for(const t of tabs){const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected;}
}
for(const tab of tabs){
  tab.addEventListener('click',()=>activate(tab));
  tab.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const index=event.key==='Home'?0:event.key==='End'?tabs.length-1:(tabs.indexOf(tab)+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
    activate(tabs[index]);tabs[index].focus();
  });
}
