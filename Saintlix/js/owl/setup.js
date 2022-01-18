/*Ferramenta carrosel */
$('.owl-carousel').owlCarousel({ /*Referência à classe  '$' atalho do jQuery */
    loop:true, /*Loop de elementos na tela*/
    margin:10, /*Margem entre elementos */
    nav:false, /*botão de navegação desativado */
    responsive:{ /*Responsividade indica o tamanho de tela e a quantidade de itens dela respectivamente*/
        0:{
            items:1 
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    
})

