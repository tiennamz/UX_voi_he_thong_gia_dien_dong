let spanLight=document.getElementById("btn-light")
let spanDark=document.getElementById("btn-dark")
let sectionElement=document.getElementsByTagName("section")[0]

    let theme=localStorage.getItem("Theme") || "light"
    if(theme==="light"){
        sectionElement.style.backgroundColor="#F7F8F9"
        sectionElement.style.color="black"
        spanDark.style.display="none"
    }else{
        sectionElement.style.backgroundColor="black"
        sectionElement.style.color="#F7F8F9"
        spanLight.style.display="none"
    }


    spanLight.addEventListener("click",()=>{
        sectionElement.style.backgroundColor="black"
        sectionElement.style.color="#F7F8F9"
        spanDark.style.display="inline"
        spanLight.style.display="none"
        localStorage.setItem("Theme", "dark")
    })

    spanDark.addEventListener("click",()=>{
        sectionElement.style.backgroundColor="#F7F8F9"
        sectionElement.style.color="black"
        spanDark.style.display="none"
        spanLight.style.display="inline"
        localStorage.setItem("Theme", "light")
    })