const add = document.querySelector(".add-btn");
// const inputbox=document.querySelector(".input-box");
const text = document.querySelector(".input-box");
const ul=document.querySelector(".task-list");
const bg=document.querySelector(".empty");
const con=document.querySelector(".to-do-container")
const che=document.querySelector(".checkbox")
const el=document.querySelector(".complited_element")
const bar=document.querySelector(".bb")
function update(){
  const no=ul.children.length;
  const n=ul.querySelectorAll(".checkbox:checked").length;
  el.innerText=`${n}/${no}`;
  bar.setAttribute("class","range");
  bar.style.width=ul?`${(n/no)*100}%`:"0%";
}


const addtask=function(){
  event.preventDefault()
  const items=text.value.trim();
  if(!items)
  {
    return;
  }
  const li=document.createElement('li');
  li.innerHTML=`<input type="checkbox" class="checkbox">
  <span>${items}</span>
  <div class="editbtn">
 <button class="del">
<span class="material-symbols-outlined">
delete
</span>
</button>
</div>`;
 

  ul.appendChild(li);
  li.querySelector(".del").addEventListener("click",()=>{
    li.remove();
    update();
  })
  text.value="";
if(ul.length!=0){
 bg.remove();
}
ul.addEventListener("click",update);
update();
}
add.addEventListener("click",addtask
);