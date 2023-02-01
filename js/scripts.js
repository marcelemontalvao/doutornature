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
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

function createThirdSection() {
    const section = document.querySelector("#third-section")

    const divTop = document.createElement("div")
    divTop.classList.add("w-75", "d-flex", "flex-column", "align-items-center", "justify-content-center")

    const divTitle = document.createElement("div")
    divTitle.classList.add("bg-mark", "col-md-3", "d-flex", "align-items-center", "justify-content-center")

    const spanTitle = document.createElement("span")
    spanTitle.classList.add("text-white", "fs-4", "fw-bold")
    spanTitle.innerText = "OFERTA ÚNICA"

    const subtitle = document.createElement("p")
    subtitle.classList.add("text-white", "fs-2", "w-75" ,"fw-bold", "text-center", "mt-5")
    subtitle.innerText = "Você não verá preço menor em outro lugar"

    // const { majorDiv } = createBannersPrice()
    // console.log(majorDiv)
    divTitle.append(spanTitle, subtitle)
    divTop.append(divTitle)
    section.append(divTop)
}

function createBannersPrice() {
    const majorDiv = document.createElement("div")
    majorDiv.classList.add("col-md-12", "d-flex", "align-items-center", "justify-content-center", "h-75")

    const divFirstBanner = document.createElement("div")
    divFirstBanner.classList.add("col-md-4", "w-25", "py-3", "d-flex", "flex-column", "align-items-center", "justify-content-center", "px-3", "rounded", "min-w-300", "bg-white")

    const title = document.createElement("p")
    title.classList.add("w-100", "rounded", "p-2", "d-flex", "justify-content-center", "align-items-center", "text-center", "text-white", "bg-gray")
    title.innerText = "ESCOLHA SEU PACOTE"

    const divBoxes = document.createElement("div")
    divBoxes.classList.add("w-100", "d-flex", "justify-content-around", "mb-2")

    const divFirstBox = document.createElement("div")
    divFirstBox.classList.add("px-3", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center", "bg-light-gray", "rounded")

    const firstSpanfirstBox = document.createElement("span")
    firstSpanfirstBox.classList.add("fs-2")
    firstSpanfirstBox.innerText = "1"
    const secondSpanfirstBox = document.createElement("span")
    secondSpanfirstBox.classList.add("fs-7")
    secondSpanfirstBox.innerText = "CAIXA"

    const divSecondBox = document.createElement("div")
    divSecondBox.classList.add("px-3", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center","text-white", "bg-green", "rounded")

    const firstSpanSecondBox = document.createElement("span")
    firstSpanSecondBox.classList.add("fs-2")
    firstSpanSecondBox.innerText = "3"
    const secondSpanSecondBox = document.createElement("span")
    secondSpanSecondBox.classList.add("fs-7")
    secondSpanSecondBox.innerText = "CAIXAS"

    const divthirdBox = document.createElement("div")
    divthirdBox.classList.add("px-3", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center", "bg-light-gray", "rounded")

    const firstSpanThirdBox = document.createElement("span")
    firstSpanThirdBox.classList.add("fs-2")
    firstSpanThirdBox.innerText = "6"
    const secondSpanThirdBox = document.createElement("span")
    secondSpanThirdBox.classList.add("fs-7")
    secondSpanThirdBox.innerText = "CAIXAS"

    const divDiscount1 = document.createElement("div")
    divDiscount1.classList.add("w-100", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center", "mt-1", "mb-2")
    const firstSpanDiscount1 = document.createElement("span")
    firstSpanDiscount1.innerText = "R$ 148,60 por caixa" 

    const secondSpanDiscount1 = document.createElement("span")
    secondSpanDiscount1.innerText = "Economize R$ 136,20" 
   
    const divDiscount2 = document.createElement("div")
    divDiscount2.classList.add("w-100", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center", "mt-1", "mb-2")
    const firstSpanDiscount2 = document.createElement("span")
    firstSpanDiscount2.innerText = "HOJE: 12X R$ 49,99" 

    const secondSpanDiscount2 = document.createElement("span")
    secondSpanDiscount2.innerText = "ou R$ 445,80 à vista" 

    const button1 = document.createElement("button")
    button1.classList.add("bg-red", "w-100", "p-2", "text-white", "border-0", "rounded-pill")
    button1.innerText = "Comprar Agora"

    const divSecondBanner = document.createElement("div")
    divSecondBanner.classList.add("col-md-3", "py-3", "d-flex", "flex-column", "position-relative", "rounded", "gap-2", "bg-white")

    const divBadge = document.createElement("div")
    divBadge.classList.add("position-absolute", "top-0", "end-0")

    const imgBadge = document.createElement("img")
    imgBadge.src = "./asset/badge.png"


    const lastMajorDivSecondBanner = document.createElement("div")
    lastMajorDivSecondBanner.classList.add("d-flex","flex-column", "justify-content-center", "align-items-center","p-2")

    const titleSecondBanner = document.createElement("p")
    titleSecondBanner.classList.add("w-100", "py-2", "d-flex", "justify-content-center", "align-items-center", "text-center", "text-white", "bg-gray", "rounded")
    titleSecondBanner.innerText = "ASSINE E ECONOMIZE (OPCIONAL)"

    const divOptions = document.createElement("span")
    divOptions.classList.add("d-flex", "flex-column", "gap-1", "p-1", "fs-7")

    const optionImg1 = document.createElement("img")
    optionImg1.src = "./asset/check-icon.png"

    const optionImg2 = document.createElement("img")
    optionImg2.src = "./asset/check-icon.png"

    const optionImg3 = document.createElement("img")
    optionImg3.src = "./asset/check-icon.png"

    const optionImg4 = document.createElement("img")
    optionImg4.src = "./asset/check-icon.png"

    const option1 = document.createElement("span")
    option1.classList.add("fs-7")
   
    const spanOption1 = document.createElement("span")
    spanOption1.innerText = "Desconto Máximo Aplicado"

    const option2 = document.createElement("span")
    option2.classList.add("fs-7")

    const spanOption2 = document.createElement("span")
    spanOption2.innerText = "Entrega Automática em sua Casa"

    const option3 = document.createElement("span")
    option3.classList.add("fs-7")

    const spanOption3 = document.createElement("span")
    spanOption3.innerText = "Menor Preço Garantido / Sem Reajustes"

    const option4 = document.createElement("span")
    option4.classList.add("fs-7")

    const spanOption4 = document.createElement("span")
    spanOption4.innerText = "Cancele quando quiser / Sem taxas"

    const button2 = document.createElement("button")
    button2.classList.add("w-100", "p-2", "border-0", "fs-7", "bg-light-gray")
    button2.innerText = "SIM! Eu quero ser assinante e ganhar DESCONTO!"

    const imgButton2 = document.createElement("img")
    imgButton2.src = "./asset/check-icon-mobile.png"

    
    button2.append(imgButton2) 
    option1.append(optionImg1, spanOption1)
    option2.append(optionImg2, spanOption2)
    option3.append(optionImg3, spanOption3)
    option4.append(optionImg4, spanOption4)
    divOptions.append(option1, option2, option3, option4)
    lastMajorDivSecondBanner.append(titleSecondBanner, divOptions, button2)
    divBadge.append(imgBadge)
    divSecondBanner.append(divBadge, lastMajorDivSecondBanner)
   
    divDiscount1.append(firstSpanDiscount1, secondSpanDiscount1)
    divDiscount2.append(firstSpanDiscount2, secondSpanDiscount2)

    divFirstBox.append(firstSpanfirstBox, secondSpanfirstBox)
    divSecondBox.append(firstSpanSecondBox, secondSpanSecondBox)
    divthirdBox.append(firstSpanThirdBox, secondSpanThirdBox)

    divBoxes.append(divFirstBox, divSecondBox, divthirdBox)
    divFirstBanner.append(title, divBoxes, divDiscount1, divDiscount2, button1)

    majorDiv.append(divFirstBanner, divSecondBanner)
    console.log(majorDiv)
    return majorDiv
}

createNavbarBrand()
createFirstSection()
createSecondSection()
// createBannersPrice()