import Navigo from "navigo";

const router = new Navigo("/",{linksSelector:"a"})

const render = (element,fuon) =>{
    element.innerHTML = fuon()
}
export{router,render}