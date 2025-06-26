// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Función para mostrar información de contacto
function openWhatsApp() {
  window.open(
    "https://wa.me/56941353900?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20sobre%20servicios%20migratorios",
    "_blank",
  )
}

// Efecto de hover en las tarjetas de servicio
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Animación del botón CTA
document.querySelector(".cta-button").addEventListener("mouseenter", function () {
  this.style.transform = "translateY(-2px) scale(1.05)"
})

document.querySelector(".cta-button").addEventListener("mouseleave", function () {
  this.style.transform = "translateY(0) scale(1)"
})
