// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the portfolio
  initPortfolio()
})

function initPortfolio() {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initialize components
  initNavbar()
  initMobileMenu()
  initCustomCursor()
  initScrollSpy()
  initFilterDropdown()
  initContactForm()

  // Load project data
  loadProjects()
}

// Navbar functionality
function initNavbar() {
  const navbar = document.getElementById("navbar")

  // Handle navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// Mobile menu functionality
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle")
  const closeMenu = document.getElementById("close-menu")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  if (!menuToggle || !closeMenu || !mobileMenu) return

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  })
}

// Custom cursor functionality
function initCustomCursor() {
  const cursorDot = document.querySelector(".cursor-dot")
  const cursorOutline = document.querySelector(".cursor-outline")

  if (!cursorDot || !cursorOutline) return

  // Only initialize on desktop
  if (window.innerWidth < 768) {
    cursorDot.style.display = "none"
    cursorOutline.style.display = "none"
    return
  }

  document.addEventListener("mousemove", (e) => {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    // Add a slight delay to the outline for a nice effect
    setTimeout(() => {
      cursorOutline.style.left = `${posX}px`
      cursorOutline.style.top = `${posY}px`
    }, 50)
  })

  // Handle cursor over clickable elements
  document.addEventListener("mouseover", (e) => {
    const target = e.target
    const isClickable =
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a") ||
      window.getComputedStyle(target).cursor === "pointer"

    if (isClickable) {
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)"
    } else {
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
    }
  })

  // Reset cursor when leaving the page
  document.addEventListener("mouseout", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)"
  })
}

// Scroll spy functionality
function initScrollSpy() {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  window.addEventListener("scroll", () => {
    let current = ""
    const scrollPosition = window.scrollY + window.innerHeight / 3

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active")
      }
    })

    mobileNavLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active")
      }
    })
  })
}

// Projects filter dropdown
function initFilterDropdown() {
  const filterButton = document.getElementById("filter-button")
  const filterDropdown = document.getElementById("filter-dropdown-content")

  if (!filterButton || !filterDropdown) return

  filterButton.addEventListener("click", () => {
    filterDropdown.classList.toggle("active")
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!filterButton.contains(e.target) && !filterDropdown.contains(e.target)) {
      filterDropdown.classList.remove("active")
    }
  })
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contact-form")

  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML

    submitButton.disabled = true
    submitButton.innerHTML = '<span class="btn-icon">⏳</span> Sending...'

    setTimeout(() => {
      contactForm.reset()
      submitButton.disabled = false
      submitButton.innerHTML = originalText

      // Show success toast
      showToast("Message sent!", "Thank you for your message. I'll get back to you soon.")
    }, 1500)
  })
}

// Toast notification
function showToast(title, message) {
  const toast = document.getElementById("toast")
  const toastTitle = document.getElementById("toast-title")
  const toastMessage = document.getElementById("toast-message")

  if (!toast || !toastTitle || !toastMessage) return

  toastTitle.textContent = title
  toastMessage.textContent = message

  toast.classList.add("active")

  setTimeout(() => {
    toast.classList.remove("active")
  }, 3000)
}

// Projects data and functionality
function loadProjects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media accounts with data visualization and reporting.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    // Add more projects as needed
  ]

  // Initialize projects gallery
  initProjectsGallery(projects)

  // Initialize filter dropdown
  initProjectFilters(projects)
}

function initProjectsGallery(projects) {
  const activeProject = document.getElementById("active-project")
  const prevButton = document.getElementById("prev-project")
  const nextButton = document.getElementById("next-project")
  const indicators = document.getElementById("gallery-indicators")

  if (!activeProject || !prevButton || !nextButton || !indicators) return

  let currentIndex = 0
  let filteredProjects = [...projects]

  // Render initial project
  renderProject(filteredProjects[currentIndex])

  // Create indicators
  renderIndicators()

  // Add event listeners for navigation
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
    renderProject(filteredProjects[currentIndex])
    updateIndicators()
  })

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % filteredProjects.length
    renderProject(filteredProjects[currentIndex])
    updateIndicators()
  })

  // Auto rotate projects
  let autoRotate = true
  let autoRotateInterval = setInterval(() => {
    if (autoRotate) {
      currentIndex = (currentIndex + 1) % filteredProjects.length
      renderProject(filteredProjects[currentIndex])
      updateIndicators()
    }
  }, 5000)

  // Stop auto rotate on user interaction
  ;[prevButton, nextButton].forEach((button) => {
    button.addEventListener("click", () => {
      autoRotate = false
      clearInterval(autoRotateInterval)
    })
  })

  function renderProject(project) {
    activeProject.innerHTML = `
      <div class="project-image">
        <div class="project-image-overlay"></div>
        <img src="${project.image}" alt="${project.title}">
        ${project.featured ? '<div class="project-featured-badge">Featured</div>' : ""}
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${project.demoUrl}" class="btn btn-primary" target="_blank">
            <span class="btn-icon">🔗</span> Live Demo
          </a>
          <a href="${project.githubUrl}" class="btn btn-outline" target="_blank">
            <span class="btn-icon">🐙</span> View Code
          </a>
        </div>
      </div>
    `
  }

  function renderIndicators() {
    indicators.innerHTML = ""

    filteredProjects.forEach((_, index) => {
      const indicator = document.createElement("button")
      indicator.classList.add("gallery-indicator")
      if (index === currentIndex) {
        indicator.classList.add("active")
      }

      indicator.addEventListener("click", () => {
        autoRotate = false
        clearInterval(autoRotateInterval)
        currentIndex = index
        renderProject(filteredProjects[currentIndex])
        updateIndicators()
      })

      indicators.appendChild(indicator)
    })
  }

  function updateIndicators() {
    const allIndicators = indicators.querySelectorAll(".gallery-indicator")

    allIndicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active")
      } else {
        indicator.classList.remove("active")
      }
    })
  }

  // Update projects when filter changes
  window.updateProjects = (filter) => {
    if (filter === "all") {
      filteredProjects = [...projects]
    } else {
      filteredProjects = projects.filter((project) => project.tags.includes(filter))
    }

    currentIndex = 0
    renderProject(filteredProjects[currentIndex])
    renderIndicators()

    // Reset auto rotate
    autoRotate = true
    clearInterval(autoRotateInterval)
    autoRotateInterval = setInterval(() => {
      if (autoRotate) {
        currentIndex = (currentIndex + 1) % filteredProjects.length
        renderProject(filteredProjects[currentIndex])
        updateIndicators()
      }
    }, 5000)
  }
}

function initProjectFilters(projects) {
  const filterDropdown = document.getElementById("filter-dropdown-content")
  const currentFilter = document.getElementById("current-filter")

  if (!filterDropdown || !currentFilter) return

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap((project) => project.tags))]

  // Add filter items
  allTags.forEach((tag) => {
    const filterItem = document.createElement("a")
    filterItem.href = "#"
    filterItem.classList.add("filter-item")
    filterItem.setAttribute("data-filter", tag)
    filterItem.textContent = tag

    filterItem.addEventListener("click", function (e) {
      e.preventDefault()

      // Update active filter
      document.querySelectorAll(".filter-item").forEach((item) => {
        item.classList.remove("active")
      })
      this.classList.add("active")

      // Update filter button text
      currentFilter.textContent = tag

      // Update projects
      window.updateProjects(tag)

      // Close dropdown
      filterDropdown.classList.remove("active")
    })

    filterDropdown.appendChild(filterItem)
  })

  // Add event listener for "All Projects" filter
  const allFilter = filterDropdown.querySelector('[data-filter="all"]')
  if (allFilter) {
    allFilter.addEventListener("click", function (e) {
      e.preventDefault()

      // Update active filter
      document.querySelectorAll(".filter-item").forEach((item) => {
        item.classList.remove("active")
      })
      this.classList.add("active")

      // Update filter button text
      currentFilter.textContent = "All Projects"

      // Update projects
      window.updateProjects("all")

      // Close dropdown
      filterDropdown.classList.remove("active")
    })
  }
}

