let state = {
    name: '',
    rasa: '',
    alamat: '',
    porsi: 1
}

const show = pos => {
    selectAll(".screen").forEach(scr => {
        scr.style.display = "none"
    })
    select(pos).style.display = "block"
}
const action = pos => {
    if (pos == 1) {
        let nameInput = select("#name").value
        if (nameInput == "") {
            return false
        }
        state.name = nameInput
        localStorage.setItem('name', nameInput)
        selectAll(".displayName").forEach(name => {
            name.innerText = state.name
        })
        show("#pos2")
    }else if (pos == 2) {
        show("#pos3")
    }else if(pos == 3) {
        let alamat = select("#alamat").value
        if (alamat == "") {
            return false
        }
        state.alamat = alamat
        localStorage.setItem('alamat', alamat)
        show("#pos4")
    }else if (pos == 4) {
        let url = new URL('https://wa.me/62881036183076')
        url.searchParams.set('text', `Halo, aku ${state.name} mau order pentol ${state.porsi} porsi, rasa ${state.rasa} ya. Nanti dikirim ke ${state.alamat}`)
        window.location = url.toString()
    }
}
const chooseRasa = rasa => {
    state.rasa = rasa
    selectAll('.rasa').forEach(r => {
        r.classList.remove('active')
    })
    select(`#${rasa}`).classList.add('active')
    localStorage.setItem('rasa', rasa)
    action(2)
}
const changePorsi = porsi => {
    state.porsi = porsi
    select("#countPorsi").innerText = porsi
}

const init = () => {
    let name = localStorage.getItem('name')
    let rasa = localStorage.getItem('rasa')
    select("#name").value = name
    selectAll(".displayName").forEach(nameArea => {
        nameArea.innerText = name
    })

    if (rasa != null) {
        select(`.rasa#${rasa}`).classList.add('active')
    }
}
init()