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
    subtitle.classList.add("bg-green", "text-white", "fs-7", "p-1")
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

    divTitle.append(spanTitle)
    divTop.append(divTitle, subtitle)
    section.append(divTop, createBannersPrice())
    
    return section
}


function createFourthSection() {
    const section = document.querySelector("#fourth-section")

    const title = document.createElement("p")
    title.classList.add("display-6","w-50", "text-center", "color-blue-title", "fw-bold", "mt-5")
    title.innerText ="Se não notar resultados, sua compra sai de graça"

    const subtitle = document.createElement("p")
    subtitle.classList.add("red-color","fs-5")
    subtitle.innerText = "Sem perguntas, nem pegadinhas..."

    const divSelo = document.createElement("div")
    divSelo.classList.add("d-flex", "col-md-8",
    "align-items-center", "justify-content-center", "row", "p-2", "br-12", "shadow-lg", "bg-body")

    const divImgSelo = document.createElement("div")
    divImgSelo.classList.add("col-md-4", "d-flex", "align-items-center", "justify-content-center")

    const imgSelo = document.createElement("img")
    imgSelo.classList.add("w-75", "h-75")
    imgSelo.src = "./asset/selo-garantia.png"

    const divText = document.createElement("div")
    divText.classList.add("col-md-8", "d-grid", "gap-4")

    const span1 = document.createElement("span")
    span1.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."

    const span2 = document.createElement("span")
    span2.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."

    const title2 = document.createElement("p")
    title2.classList.add("display-6","w-50", "text-center", "color-blue-title", "fw-bold", "mt-5")
    title2.innerText = "Veja alguns resultados do Active Anti Ox*"

    const subtitle2 = document.createElement("p") 
    subtitle2.classList.add("red-color","fs-5")
    subtitle2.innerText = "Experimente e comece a hidratar sua pele de verdade"

    const divImages = document.createElement("div")
    divImages.classList.add("d-flex", "align-items-center", "justify-content-center", "col-md-10", "gap-5")

    const divImage1 = document.createElement("div")
    divImage1.classList.add("d-flex", "flex-column", "col-md-5")

    const img7 = document.createElement("img")
    img7.src = "./asset/image7.jpg"

    const img8 = document.createElement("img")
    img8.src = "./asset/image8.jpg"

    const img9 = document.createElement("img")
    img9.src = "./asset/image9.jpg"

    const img10 = document.createElement("img")
    img10.src = "./asset/image10.jpg"

    const divImage2 = document.createElement("div")
    divImage2.classList.add("d-flex", "flex-column", "col-md-5")

    const description = document.createElement("p")
    description.classList.add("d-grid", "col-md-7", "mb-5")
    description.innerText = "*Somos honestos e transparentes com nossos clientes, os resultados podem variar de pessoa para pessoa, cada organismo é único e vai reagir aos compostos de forma diferente. Aproveite a nossa garantia incondicional, compre e avalie você mesmo os resultados. Esta fórmula foi desenvolvida por médico e sua equipe de pesquisadores."

    divImgSelo.append(imgSelo)
    divText.append(span1, span2)
    divSelo.append(divImgSelo, divText)
    divImage1.append(img7, img9)
    divImage2.append(img8, img10)
    divImages.append(divImage1, divImage2)
    
    section.append(title, subtitle, divSelo, title2, subtitle2, divImages, description)

    return section
}


function createFifthSection() {
    const section = document.querySelector("#fifth-section")

    const title = document.createElement("p")
    title.classList.add("text-white", "display-6", "w-50", "text-center", "fw-bold", "mt-5", "pb-4")
    title.innerText = "Tire suas dúvidas"

    const divQuestions = document.createElement("div")
    divQuestions.classList.add("w-50", "d-grid","gap-4", "pb-5")

    const divQuestion1 = document.createElement("div")
    divQuestion1.classList.add("border-bottom","p-1")

    const plus1 = document.createElement("span")
    plus1.classList.add("red-color")
    plus1.innerText = "+"

    const spanText1 = document.createElement("span")
    spanText1.classList.add("text-white")
    spanText1.innerText = "Do que é feito o Active Anti-OX?"

    divQuestion1.append(plus1, spanText1)

    const divQuestion2 = document.createElement("div")
    divQuestion2.classList.add("border-bottom","p-1")

    const plus2 = document.createElement("span")
    plus2.classList.add("red-color")
    plus2.innerText = "+"

    const spanText2 = document.createElement("span")
    spanText2.classList.add("text-white")
    spanText2.innerText = "Como devo usar o Active Anti-OX?"

    divQuestion2.append(plus2, spanText2)

    const divQuestion3 = document.createElement("div")
    divQuestion3.classList.add("border-bottom","p-1")

    const plus3 = document.createElement("span")
    plus3.classList.add("red-color")
    plus3.innerText = "+"

    const spanText3 = document.createElement("span")
    spanText3.classList.add("text-white")
    spanText3.innerText = "Active Anti-OX tem contra-indicação?"

    divQuestion3.append(plus3, spanText3)

    const divQuestion4 = document.createElement("div")
    divQuestion4.classList.add("border-bottom","p-1")

    const plus4 = document.createElement("span")
    plus4.classList.add("red-color")
    plus4.innerText = "+"

    const spanText4 = document.createElement("span")
    spanText4.classList.add("text-white")
    spanText4.innerText = "Precisa de prescrição médica para comprar?"

    divQuestion4.append(plus4, spanText4)

    const divQuestion5 = document.createElement("div")
    divQuestion5.classList.add("border-bottom","p-1")

    const plus5 = document.createElement("span")
    plus5.classList.add("red-color")
    plus5.innerText = "+"

    const spanText5 = document.createElement("span")
    spanText5.classList.add("text-white")
    spanText5.innerText = "E se Active Anti-OX não funcionar para mim?"

    divQuestion5.append(plus5, spanText5)

    const divQuestion6 = document.createElement("div")
    divQuestion6.classList.add("border-bottom","p-1")

    const plus6 = document.createElement("span")
    plus6.classList.add("red-color")
    plus6.innerText = "+"

    const spanText6 = document.createElement("span")
    spanText6.classList.add("text-white")
    spanText6.innerText = "Quando posso perceber resultados?"

    divQuestion6.append(plus6, spanText6)

    const divQuestion7 = document.createElement("div")
    divQuestion7.classList.add("border-bottom","p-1")

    const plus7 = document.createElement("span")
    plus7.classList.add("red-color")
    plus7.innerText = "+"

    const spanText7 = document.createElement("span")
    spanText7.classList.add("text-white")
    spanText7.innerText = "Além do Vital 4k o que mais vou receber na minha compra?"

    divQuestion7.append(plus7, spanText7)

    const divQuestion8 = document.createElement("div")
    divQuestion8.classList.add("border-bottom","p-1")

    const plus8 = document.createElement("span")
    plus8.classList.add("red-color")
    plus8.innerText = "+"

    const spanText8 = document.createElement("span")
    spanText8.classList.add("text-white")
    spanText8.innerText = "Vocês tem uma garantia de satisfação?"

    divQuestion8.append(plus8, spanText8)
   
    divQuestions.append(divQuestion1, divQuestion2, divQuestion3, divQuestion4, divQuestion5, divQuestion6, divQuestion7, divQuestion8)

    section.append(title, divQuestions)

    return section;
}

function createSixthSection() {
    const section = document.getElementById("sixth-section")
    const title = document.createElement("p")
    title.classList.add("fs-1", "w-50", "color-blue-title", "text-center", "fw-bold", "mt-5")
    title.innerText = "O melhor suplemento para hidratar sua pele"

    const subtitle = document.createElement("p")
    subtitle.classList.add("red-color", "fs-5")
    subtitle.innerText = "hidratação de verdade"

    const divContainer = document.createElement("div")
    divContainer.classList.add("col-md-12", "row", "d-flex", "align-items-center", "justify-content-center")

    const ul = document.createElement("ul")
    ul.classList.add("col-md-4", "d-grid", "gap-4")

    const li1 = document.createElement("li")
    li1.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."
    const li2 = document.createElement("li")
    li2.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."
    const li3 = document.createElement("li")
    li3.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ex sed pariatur iste libero. Fugiat exercitationem placeat dolor commodi! Tempora cumque voluptate dolor obcaecati maiores eveniet nesciunt fugiat sit aliquam."
    
    const divImg11 = document.createElement("div")
    divImg11.classList.add("col-md-4")
    
    const img11 = document.createElement("img")
    img11.classList.add("w-75", "h-75")
    img11.src = "./asset/image11.jpg"

    ul.append(li1, li2, li3)
    divImg11.append(img11)
    divContainer.append(ul, divImg11)
    section.append(title, subtitle, divContainer, createBannersPrice())

    return section;
}


function createFooter() {
    const footer = document.getElementById("footer")

    const div = document.createElement("div")
    div.classList.add("d-flex", "w-75", "flex-column", "align-items-center", "justify-content-center", "col-md-12", "p-5", "mt-5")

    const p = document.createElement("p")
    p.classList.add("fs-7")
    p.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum quo, incidunt suscipit iure cupiditate soluta distinctio animi magnam! Dolore modi similique voluptate, eius voluptates unde sunt suscipit nobis at?"

    const divCopyright = document.createElement("div")
    divCopyright.classList.add("d-flex", "w-100", "gap-4", "align-items-center", "justify-content-between")

    const img = document.createElement("img")
    img.src = "./asset/logo_footer-DoutorNature.svg"

    const span = document.createElement("span")
    span.classList.add("fs-7")
    span.innerText = "@2002 Doutor Nature-Todos os direitos reservados - Política de Privacidade | Termos de Uso"

    divCopyright.append(img, span)
    div.append(p, divCopyright)
    footer.append(div)

    return footer
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
    imgBadge.width = 50;
    imgBadge.height = 50


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
    return majorDiv
}

createNavbarBrand()
createFirstSection()
createSecondSection()
createThirdSection()
createFourthSection()
createFifthSection()
createSixthSection() 
createFooter()