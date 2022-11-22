import { Router } from "./router.js";
const router = new Router();
Router.add("/", "pages/home.html");
Router.add("/about", "pages/about.html");
Router.add("/contact", "pages/contact.html");
Router.add(404, "/pages/404.html");
handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();

// const { pathname } = window.location; ler da seguinte forma entre dentro do windown e localiza o pathname em vez de escrever window.location.pathname. Vai dentro de location localiza o pathname e faz uma constante dele pra min
//Eu tenho o mapeamento de rota e pagina está dentro do routes
//E como faz para pegar uma ROTA como adicionar
//SetTimeout = por padrao nos achamaos que vai ser executado linnha a linha mais vai acontecer da seguinte formar primeiro vai iniciar depois mostrar e depois ler o console porque por padrao o setTimout ele e ansicrono o 0 e os segundos que você definir
//console.log('inicia')
//setTimout(() => console.log('ler html'), 0})
//console.log('Mostrar')
//Eu nao estava avisando pra onde estava indo quando clicava todo link ficava na mesma pagina
//const pathname = window.location.pathname;
//Coloque no seu historico que estou sim mudando de pagina.
