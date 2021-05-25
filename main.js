var pages = document.getElementsByClassName('page');
var img = document.querySelector('.innerPage__aparecer');
var button = document.querySelector('.button');

for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
});

button.addEventListener('click', ()=>{

  function imagenAparecer(){

    img.classList.remove('hidden');
  setTimeout(imagenDesaparecer,1000);
    
  
  }
  
  function imagenDesaparecer(){
    img.classList.add('hidden');
  setTimeout(imagenAparecer,1000);
  }
  
  setTimeout(imagenAparecer,1000);

});



