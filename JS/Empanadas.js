$(document).ready(function () {
  //Scroll para subir al inicio de la web
  $(".btn-subirarriba").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });

  var ScrollMenu = $(".empScrollEmp");
  ScrollMenu.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 850,
      },
      800
    );
  });

  var ScrollMenu = $(".empScrollSobreN");
  ScrollMenu.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 1850,
      },
      600
    );
  });

  var ScrollMenu = $(".empScrollContacto");
  ScrollMenu.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 2690,
      },
      600
    );
  });

  let animado = document.querySelectorAll(".animado");

  function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
      let alturaAnimado = animado[i].offsetTop;
      if (alturaAnimado - 200 < scrollTop) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
      }
    }
  }

  window.addEventListener("scroll", mostrarScroll);
});

//	Swal.fire("Bienvenido!", "D'ARMANDO EMPANADAS!", "success");
