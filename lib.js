let lib = ( () => {
    const jobtitle=period=details='pene'

    let header = (item) => {
        cont = ''
        item['contact'].forEach(it = (it) => {
            cont = cont+`<li><a href="${it['url']}" target="_blank"><img class="icon-standard" src="./${it['method']}.svg"/></a></li>`
        })
    
        const header_item = `
        <div class="logo">
        ${item['name']}
        <div class="sub">${item['description']}</div>
        </div>
        <div class="extra">
            <ul>
            ${cont}
            </ul>
        </div>`
        return header_item
    }
    
    let exp = (item, title, align) => {
        let aux = ''
        item.forEach(it = (it) =>{
            aux= aux+`<div class="div-cv">
                <p class="message-title">${it['title']}</p>
                <p class="message-small-black">${it['where']}</p>
                <p class="message-small">${it['period']}</p>
                <p class="${align}">${it['details']}</p>
            </div>`
        })
        let fin = `<div class="column-main"><div class="section-title">${title}</div>${aux}</div>`
        return fin
    }
    
    let sks = (item) => {
        let aux = ''
        item.forEach(it = (it) => {
            aux= aux+`<p class="message-title">${it['name']}</p>
            <p class="message-small">${it['expertise']}</p>`
        })
        let fin = `<div class="column-side">${aux}</div>`
        return fin
    }
    let builder = () => {
        let dt = data.data()
        let aux = ''
        aux = header(dt['personal'])
        document.getElementById("header").innerHTML = aux
        let we = exp(dt['professional'], "Working Experience", "message-medium-justified")
        let se = exp(dt['studies'], "Education", "message-medium")
        let sk = sks(dt['skills'], "Skills")
        let lt = `<div class="div-letter">${dt['letter']}</div>`
        document.getElementById('article').innerHTML= lt+sk+we+se
    }
    return {
        build: () => builder()
    };

})();