 //Make sure the elements are loaded

 document.addEventListener("DOMContentLoaded",()=>{
 // Select element
 const countervalue=document.getElementById("countervalue");
 const increasebtn=document.getElementById("increase-btn");
 const decreasebtn=document.getElementById("decrease-btn");
 const resetbtn=document.getElementById("reset-btn");
  let count=0;
  //add events buttons
  increasebtn.addEventListener("click",()=>
{
    count++;
    countervalue.textContent=count;
});
decreasebtn.addEventListener("click",()=>
    {
        count--;
        countervalue.textContent=count;
    });
    resetbtn.addEventListener("click",()=>
        {
            count=0;
            countervalue.textContent=count;
        });
 });