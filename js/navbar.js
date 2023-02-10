const $botao = document.querySelector('div#menu-mobile')

function chamarMenu(event){ //Parâmetro 'event'
    if (event.type === 'touchstart') event.preventDefault() //Evita a ativação do evento duas vezes
    const $menu = document.querySelector('nav#menu') 
    $menu.classList.toggle('ativa') // Adiciona ou remove a Class 'ativa'
    $botao.classList.toggle('animacao') // Adiciona ou remove a Class 'animacao'

    const ativa = $botao.classList.contains('animacao') // Cria uma variável que retorna True ou False para a classe do botão 
    event.currentTarget.setAttribute('aria-expanded', ativa) //Cria acessibilidade ao site
}

$botao.addEventListener('click', chamarMenu) //Evento de clique
$botao.addEventListener('touchstart', chamarMenu) //Evento de touch