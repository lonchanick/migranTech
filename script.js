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

// Efecto de hover en las tarjetas de servicio (excluyendo coming-soon)
document.querySelectorAll(".service-card:not(.coming-soon)").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Efecto especial para el card coming-soon
document.querySelector(".service-card.coming-soon").addEventListener("click", (e) => {
  e.preventDefault()

  // Crear notificación temporal
  const notification = document.createElement("div")
  notification.textContent = "🔔 Te notificaremos cuando este servicio esté disponible"
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(45deg, #ff9800, #f57c00);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    font-size: 0.9rem;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `

  document.body.appendChild(notification)

  // Remover notificación después de 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
})

// Agregar animaciones CSS para la notificación
const style = document.createElement("style")
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`
document.head.appendChild(style)

// Animación del botón CTA
document.querySelector(".cta-button").addEventListener("mouseenter", function () {
  this.style.transform = "translateY(-2px) scale(1.05)"
})

document.querySelector(".cta-button").addEventListener("mouseleave", function () {
  this.style.transform = "translateY(0) scale(1)"
})

// Mejorar la experiencia táctil en móviles
if ("ontouchstart" in window) {
  document.body.classList.add("touch-device")
}

// Prevenir zoom accidental en inputs (si se agregan en el futuro)
document.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length > 1) {
      e.preventDefault()
    }
  },
  { passive: false },
)

// Mejorar el scroll suave en móviles
if (window.innerWidth <= 768) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 20
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Optimizar animaciones para dispositivos móviles
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
if (prefersReducedMotion.matches) {
  // Deshabilitar animaciones si el usuario prefiere movimiento reducido
  const style = document.createElement("style")
  style.textContent = `
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  `
  document.head.appendChild(style)
}

// Función para manejar cambios de orientación
window.addEventListener("orientationchange", () => {
  // Pequeño delay para permitir que el navegador se ajuste
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

console.log("?");
