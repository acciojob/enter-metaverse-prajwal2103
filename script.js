//your JS code here. If required.
let button=document.getElementById("enterBtn");
button.addEventListener("click",()=>{
	let para=document.getElementById("status");
	let body=document.getElementsByTagName("body");
	let hone=document.createElement("h1");
	hone.innerText="Entered Metaverse";
	para.replaceWith(hone)
	
	
})

