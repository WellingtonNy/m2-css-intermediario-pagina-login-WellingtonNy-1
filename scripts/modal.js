function criar() {
   
    let mDiv1 = document.createElement('div')
    let mDiv2 = document.createElement('div')
    let mBut = document.createElement('button')
    let mH2 = document.createElement('h2')
    let mInp = document.createElement('input')
    let mBut2 = document.createElement('button')
   
    mDiv1.id = 'divModal'
    mDiv1.classList.add('modalb')
    mDiv1.classList.add('continens')
    mDiv1.classList.add('flex')
    mDiv1.classList.add('flexCentrum')
    mDiv1.classList.add('col50')

    mDiv2.classList.add("modalc")
    mDiv2.classList.add("continensModal")
    mDiv2.classList.add("flex")
    mDiv2.classList.add("flexCentrum")
    mDiv2.classList.add("flexColumnae")
    mDiv2.classList.add("flexE")

    mBut.id = 'closeBut'
    mBut.classList.add("claudere")
    mH2.classList.add("notam2")
    mH2.classList.add("larg")
    mInp.classList.add("input1")
    mBut2.classList.add("but1")
    mBut2.classList.add("notam")
    mBut2.classList.add("button1")
    mBut2.classList.add("radii")
    
    mBut.innerText = 'X'
    mH2.innerText = 'Recuperare Rationem'
    mInp.placeholder = "intra e-mail"
    mBut2.innerText = 'Submittere'
   
    mDiv1.append(mDiv2)
    mDiv2.append(mBut, mH2, mInp, mBut2)
    
    return mDiv1

}

function modal() {

    let modalbutton = document.querySelector("#modal001");
    let mlo = document.querySelector('#mods')

    modalbutton.addEventListener('click', () => {
        const modalF = criar()
        mlo.appendChild(modalF)
        removeModal()
    })
}

function removeModal() {
    let closeBut = document.querySelector('#closeBut')
    let divModal = document.querySelector('#divModal')

    closeBut.addEventListener('click', () => {
        divModal.remove()
    })
}
modal()





