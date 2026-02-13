document.addEventListener('DOMContentLoaded',function(){
  console.log('Portfolio loaded — Suryam Srivastava');
  const avatar=document.querySelector('.avatar');
  if(avatar){
    avatar.addEventListener('click',()=>{
      avatar.animate([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:420,easing:'ease-in-out'})
    })
  }
});
