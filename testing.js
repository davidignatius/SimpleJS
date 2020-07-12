var container=document.getElementsByClassName('container')[0];
var jumbo=document.getElementsByClassName('jumbo')[0];
var thumbs=document.querySelectorAll('.thumb');
container.addEventListener('click',function(e){
  if(e.target.className=="thumb"){
    jumbo.src=e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function(){
      jumbo.classList.remove('fade')
    },310)
    thumbs.forEach((thumb) => {
      thumb.className='thumb';
    });
    e.target.classList.add('active');
  }
})
