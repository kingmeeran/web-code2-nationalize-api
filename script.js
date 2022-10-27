let main1=document.createElement("div")
main1.setAttribute("class","main1")

let h=document.createElement("h1")
h.innerHTML="Nationalize API"

let c=document.createElement("div")
c.setAttribute("class","container")

let text=document.createElement("input")
text.setAttribute("type","text")
text.setAttribute("id","serch")
text.setAttribute("placeholder","serch by any name")

let button=document.createElement("button")
button.setAttribute("type","serch")
button.setAttribute("class","serch")
button.addEventListener("click",foo)
button.innerHTML="serch"

let bx1=document.createElement("div")
bx1.setAttribute("class","bx1")
let bx2=document.createElement("div")
bx2.setAttribute("class","bx2")

let bx3=document.createElement("div")
bx3.setAttribute("class","bx3")
let bx4=document.createElement("div")
bx4.setAttribute("class","bx4")

let c1=document.createElement("div")
c1.setAttribute("class","c1")

let h2=document.createElement("h2")

c.append(text,button)
main1.append(h,c,h2,bx1,bx2,bx3,bx4)
document.body.append(main1)

async function foo(){
    let name=document.getElementById("serch").value;
    let r=await fetch(`https://api.nationalize.io?name=${name}`)
    let res=await r.json();
    let r1=res.country;
    h2.innerHTML="top two contry information"
    bx1.style.backgroundColor="aqua"
    bx1.style.boxShadow=" 0px 5px 12px black inset";
    bx1.innerHTML=`country id is <span>${r1[0].country_id}🌍</span>`;
    bx2.style.background="aqua"
    bx2.style.boxShadow=" 0px 5px 12px black inset";
    bx2.innerHTML=`probability code is <span>${r1[0].probability}</span>`
    bx3.style.backgroundColor="aqua"
    bx3.style.boxShadow=" 0px 5px 12px black inset";
    bx3.innerHTML=`country id is <span>${r1[1].country_id}🌍</span>`;
    bx4.style.background="aqua"
    bx4.style.boxShadow=" 0px 5px 12px black inset";
    bx4.innerHTML=`probability code is <span>${r1[1].probability}</span>`
}
