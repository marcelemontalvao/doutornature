function createNavbarBrand() {
    const nav = document.querySelector(".navbar")

    const logo = document.createElement("img")
    logo.classList.add("navbar-brand")
    logo.src = "./asset/logo_Doutor-Nature.svg"
    logo.alt = "Doutor Nature"
    logo.width = 180

    nav.appendChild(logo)
   
    return nav;
}

function createFirstSection() {
    const section = document.querySelector(".bg-img-desktop")
    
    const title = document.createElement("p")
    title.classList.add("display-6", "color-blue-title", "w-50", "text-center", "fw-bold", "mt-5")
    title.innerText = 'O jeito certo de hidratar a pele tipo "crepe"' 

    const subtitle = document.createElement("p")
    subtitle.classList.add("bg-green", "text-white", "fs-6", "p-1")
    subtitle.innerText = `E porque a indústria de cosméticos nunca falou sobre isso...` 

    const iframe = document.createElement("iframe")
    iframe.classList.add("p-3")
    iframe.width=660
    iframe.title="YouTube video player"
    iframe.height=415
    iframe.src="https://www.youtube.com/embed/5lDhkpEGgj8"
    iframe.frameBorder=0
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    iframe.allowFullscreen=true

    const link = document.createElement("a")
    link.href="#div-doutor-rafael"
    link.classList.add("text-dark", "mb-3")

    const svg = document.createElement("svg")
    svg.xmlns="http://www.w3.org/2000/svg"
    svg.width=30
    svg.height=30
    svg.fill="currentColor"
    svg.classList.add("bi", "bi-arrow-down") 
    svg.viewBow="0 0 16 16"

    svg.innerHTML = `
        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
    `

    link.appendChild(svg)
    section.append(title, subtitle, iframe, link)
    console.log(section)
    return section
}

function createSecondSection() {
    const section = document.querySelector("#div-doutor-rafael")
    const title = document.createElement("p")
    title.classList.add("display-6", "color-blue-title", "w-50", "text-center", "fw-bold", "mt-5")
    title.innerText = 'Porque cremes não hidratam esse tipo de pele "crepe"?' 

    const subtitle = document.createElement("p")
    subtitle.classList.add("red-color", "fs-5")
    subtitle.innerText = "Descubra uma alternativa mais eficiente."


    const majorDiv = document.createElement("div")
    majorDiv.classList.add("col-md-12", "row", "d-flex", "align-items-center", "justify-content-center")

    const divText = document.createElement("div")
    divText.classList.add("col-md-5", "d-grid", "gap-4")
    
    const span1 = document.createElement("span")
    span1.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."

    const span2 = document.createElement("span")
    span2.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."

    const span3 = document.createElement("span")
    span3.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."

    const divImg = document.createElement("div")
    divImg.classList.add("col-md-4", "d-flex", "align-items-center", "justify-content-center")

    const img = document.createElement("img")
    img.classList.add("w-75", "h-75")
    img.src = "./asset/doutor-rafael.png"

    
    divText.append(span1,span2,span3)
    divImg.append(img)
    majorDiv.append(divText, divImg)
    section.append(title, subtitle, majorDiv)

    return section
}

createNavbarBrand()
createFirstSection()
createSecondSection()