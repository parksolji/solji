let a = document.querySelector('#sj');
let b = document.querySelectorAll('.pri');

function toggle(){
  if (a.innerHTML == "숨기기"){
    b.forEach(e => {
      e.style.display = 'none' 
    }
    )
    a.innerText = "보기" 
  }
  else if(a.innerHTML=="보기"){
    b.forEach(e => {
      e.style.display = 'block'
    }
    )
    a.innerText = "숨기기" 
  }
}