var menu1 =
document.getElementById("menu1");
function ocultar(){
  try {
    alert ("BIEN ZOZORRA"); 
  }
  catch (error){ 
    console.log("No funciono esta monda");
  }
}

menu1.addEventListener("click", ocultar);