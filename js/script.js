$(document).ready(function(){
    
    $('ul.tabs').tabs();
    $('.tooltipped').tooltip({delay: 10});
    $('select').material_select();
    $(".chamados").niceScroll();
    Materialize.showStaggeredList("#aparecer");
    
    verSenha();
    filtroSolicitacao();
    responder();
    analistas();
    novoChamado();
    verChamadoLista();
    alerts();
    menu();
    
})
$(window).scroll(function(){
    responder();
})

function verSenha(){
    $(".ver").click(function(){
        var tipo = $(this).next("input").attr("type");
        if (tipo == 'password'){
            $(this).next("input").attr("type", "text");
        } else {
            $(this).next("input").attr("type", "password");
        }
    })
}

function activeTicket(){
    $(".tickets .itens li").click(function(){
        $(".tickets .itens li").each(function(){
            $(this).removeClass("active");
        })
        $(this).addClass("active");
        $(".ticket-descricao").addClass("active");
        $(".overlay").addClass("active");

        var foto = $(this).find(".foto img").attr("src");
        var assunto = $(this).find(".assunto").text();
        var nome = $(this).find("span.left").text();
        
        $(".ticket-descricao .foto img").attr("src", foto);
        $(".ticket-descricao h6 .assunto").text(assunto);
        $(".ticket-descricao h6 .nome").text(nome);
        console.log(nome)
    });

    $(".ticket-descricao .foto").click(function(){
        $(this).offsetParent().addClass("active");
        $(".overlay").addClass("active");
    })
    $(".ticket-descricao .close").click(function(){
        $(this).offsetParent().removeClass("active");
        $(".overlay").removeClass("active");
    })
}

function filtroSolicitacao(){
    $("#f-tipo").change(function(){
        var tipo = $(this).select().val();
        
        $(".items li").each(function(){
            var tiposelecionado = $(this).find(".tipo").text();
            if(tipo == tiposelecionado){
                $(this).css({"display":"block"})
            }else if(tipo == 'Todas'){
                $(this).css({"display":"block"})
            }else{
                $(this).css({"display":"none"})
            }
        })
    })

    $("#f-prioridade").change(function(){
        var tipo = $(this).select().val();
        var prioridade = $(this).select().val();
        
        $(".items li").each(function(){
            var prioridadeselecionado = $(this).find(".prioridade").text();
            var tiposelecionado = $(this).find(".tipo").text();

            if(prioridade == prioridadeselecionado){
                $(this).css({"display":"block"})
            }else if(prioridade == 'Todas'){
                $(this).css({"display":"block"})
            }else{
                $(this).css({"display":"none"})
            }
        })
    })
}

function responder(){
    $(".responder").click(function(){
        var altura = $(".chamados").height();
        var deslize = $(".chamados").scrollTop();
        $("#resposta").focus();
        $(".chamados").animate({
            scrollTop: altura
        },{
            duration: 300,
            specialEasing: {
                height: "easeInOut"
            }
        })
        if(deslize > 0){
            $(this).addClass("hide");
        }else{
            $(this).removeClass("hide");
        }
    })
}

function analistas(){
    $(".openAnalistas").click(function(){
        $("#analistas").addClass("active");
    })
    $("#analistas .fechar").click(function(){
        $("#analistas").removeClass("active");
    })
}

function novoChamado(){
    $(".openChamado").click(function(){
        $("#novoChamado").addClass("active");
    })
    $("#novoChamado .fechar").click(function(){
        $("#novoChamado").removeClass("active");
    })
}

function verChamadoLista(){
    $(".items-lista li i.click").click(function(){
        var a = $(this).offsetParent().attr("data-state");
        
        $(".items-lista li").each(function(){
            $(this).removeClass("active");
            $(this).find("i.click").removeClass("mdi-content-remove-circle");
            $(this).find("i.click").addClass("mdi-content-add-circle");
            $(this).attr("data-state", 0);
        })
        
        if(a == 0){
            $(this).offsetParent().addClass("active");
            $(this).offsetParent().find("i.click").removeClass("mdi-content-add-circle");
            $(this).offsetParent().find("i.click").addClass("mdi-content-remove-circle");
            $(this).offsetParent().attr("data-state", 1);
        }else{
            $(this).offsetParent().removeClass("active");
            $(this).offsetParent().find("i.click").removeClass("mdi-content-remove-circle");
            $(this).offsetParent().find("i.click").addClass("mdi-content-add-circle");
            $(this).offsetParent().attr("data-state", 0);
        }
        
    })
    $(".items-lista li i.mais").click(function(){
	$(this).offsetParent().find(".actions").toggleClass("active");
	$(this).toggleClass("light-blue-text");
    })
}

function alerts(){
    $(".activeAlert").click(function(){
        $("#alerta").addClass("active");
        setTimeout( function(){
            $("#alerta").addClass("out");
            console.log("1")
        }, 1500);
        setTimeout( function(){
            $("#alerta").removeClass("active out");
            console.log("2")
        }, 2100);
    })

    $(".activeAlert2").click(function(){
        $("#alerta2").addClass("active");
        setTimeout( function(){
            $("#alerta2").addClass("out");
            console.log("1")
        }, 1500);
        setTimeout( function(){
            $("#alerta2").removeClass("active out");
            console.log("2")
        }, 2100);
    })
}

function menu(){
    $("#topo .logo i").click(function(){
        $(".menu").toggleClass("active");
    })
}


/*<div class="chamado-chat">
    <div class="overlay suave"></div>
    <div class="ticket-descricao suave white">
        <div class="foto suave click">
            <img src="img/p3.jpg" class="responsive-img circle">
        </div>
        <h6 class="truncate black-text quick suave">
            <div class="assunto truncate">Assunto do Ticket</div>
            <i class="ion-close close right click"></i>
            <span class="light-blue-text left nome">
                Jessica
            </span>
            <span class="light-blue-text right">Sex às 17:59</span>
        </h6>
        <p class="suave">
            <span>
                <b>Problema:</b>
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <span>
                <b>Anexos:</b>
            </span>
            <img src="img/sam.jpg" class="responsive-img materialboxed">
            <img src="img/p1.jpg" class="responsive-img materialboxed">
            <img src="img/p2.jpg" class="responsive-img materialboxed">
            <img src="img/p3.jpg" class="responsive-img materialboxed">
        </p>
    </div>
    <ul class="nm">
        <li class="white esquerda">
            <div class="foto suave click">
                <img src="img/p3.jpg" class="responsive-img circle">
            </div>
            <p>Me ajuda pelo amor de Deus</p>
        </li>
        <li class="white direita">
            <div class="foto suave click">
                <img src="img/sam.jpg" class="responsive-img circle">
            </div>
            <p>Em que posso ajudala?</p>
        </li>
        <li class="white esquerda">
            <div class="foto suave click">
                <img src="img/p3.jpg" class="responsive-img circle">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </li>
        <li class="white direita">
            <div class="foto suave click">
                <img src="img/sam.jpg" class="responsive-img circle">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </li>
        <li class="white esquerda">
            <div class="foto suave click">
                <img src="img/p3.jpg" class="responsive-img circle">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </li>
        <li class="white direita">
            <div class="foto suave click">
                <img src="img/sam.jpg" class="responsive-img circle">
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </li>
    </ul>
    <form class="white">
        <input type="text" name="mensagem" placeholder="Responder">
        <button class="btn light-blue">
            <i class="ion-android-send"></i>
        </button>
    </form>
</div>*/