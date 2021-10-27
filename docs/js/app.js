$("#menu").click(function () {
    $("#contenedormenu").toggleClass("mostrarmenu");
});

$(document).ready(function () {
    $("#subir").click(function () {
        $("html,body").animate(
            {
                scrollTop: "0px",
            },
            1000
        );
    });
});
$(".btn_ancla").click(function () {
    var ancla = $(this).attr("href");
    $("html,body").animate(
        {
            scrollTop: $(ancla).offset().top,
        },
        1000
    );
    $("#contenedormenu").toggleClass("mostrarmenu");
});

//fancybox
$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
    });
});

//modales

const btnCerrar = document.getElementById('btnCerrar');
const btnCerrarF = document.getElementById('btnCerrarF');
const btnModal = document.getElementById('btnModalAnuncio');
const btnModal2 = document.getElementById('btnModalForm');
const modalAnuncio = document.getElementById('modalAnuncio');
const modalForm = document.getElementById('modalForm');

btnModal.addEventListener('click', ()=>{
    modalAnuncio.style.display = 'block';
    modalAnuncio.style.animationName = 'mostrarModal';
    modalAnuncio.style.animationDuration = '0.5s';
});

btnModal2.addEventListener('click', ()=>{
    modalForm.style.display = 'block';
    modalForm.style.animationName = 'mostrarModal';
    modalForm.style.animationDuration = '0.5s';
});

btnCerrar.addEventListener('click', ()=>{
    modalAnuncio.style.animationName = 'ocultarModal';
    modalAnuncio.style.animationDuration = '0.5s';
    setTimeout(()=>{
        modalAnuncio.style.display = 'none';
    }, 450)
});
btnCerrarF.addEventListener('click', ()=>{
    modalForm.style.animationName = 'ocultarModal';
    modalForm.style.animationDuration = '0.5s';
    setTimeout(()=>{
        modalForm.style.display = 'none';
    }, 450)
});