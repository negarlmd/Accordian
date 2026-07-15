  const h2=document.querySelectorAll('.acc>li>h2');
    h2.forEach((val)=>{
   val.addEventListener('click',()=>{
    val.nextElementSibling.classList.toggle('show')
   })
    })