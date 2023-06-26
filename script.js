function navOpen(){
  let navlinks=document.querySelector('.nav-links');
  if(navlinks.className==='nav-links'){
    navlinks.classList+=" active"
  }else{
    navlinks.className='nav-links'
  }

}