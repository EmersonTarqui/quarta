// Cria uma nova instância do objeto Swiper
const swiper = new Swiper('.swiper', {
    // Direção do deslizamento
    direction: 'horizontal',
    // Ficar rodando infinitamente
    loop: true,
    // Reprodução automática
    autoplay: {
        // Tempo entre cada transição
        delay: 3000,
        // Continua o fluxo mesmo com o usuário clicando
        disableOnInteraction: false,
    },
    // Define o efeito que o slide assumirá
    effect: 'coverflow',
    // Configurações específicas do efeito assumido
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
    },
    // Configuração da paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // Corrigido "dynamicBullests" para "dynamicBullets"
    },
    // Configuração do botão de ir e voltar
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', // Corrigido o erro de vírgula extra
    },
    // Velocidade de animação
    speed: 1000,
    // Ativar o cursor de agarrar
    grabCursor: true,
});
