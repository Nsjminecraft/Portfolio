// Wait for DOM to be fully loaded and Three.js to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check if Three.js is loaded
  const checkThreeInterval = setInterval(() => {
    if (window.THREE) {
      clearInterval(checkThreeInterval)
      initThreeScenes()
    }
  }, 100)
})

function initThreeScenes() {
  // Initialize background stars
  initStarsBackground()

  // Initialize hero 3D text
  initHero3DText()

  // Initialize skills graph
  initSkillsGraph()

  // Initialize projects gallery
  initProjectsGallery()
}

// Background stars
function initStarsBackground() {
  const canvas = document.getElementById("stars-canvas")

  if (!canvas) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create stars
  const starsGeometry = new THREE.BufferGeometry()
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
  })

  const starsCount = 5000
  const starsPositions = new Float32Array(starsCount * 3)

  for (let i = 0; i < starsCount * 3; i += 3) {
    starsPositions[i] = (Math.random() - 0.5) * 100
    starsPositions[i + 1] = (Math.random() - 0.5) * 100
    starsPositions[i + 2] = (Math.random() - 0.5) * 100
  }

  starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3))

  const stars = new THREE.Points(starsGeometry, starsMaterial)
  scene.add(stars)

  camera.position.z = 20

  // Animation
  function animate() {
    requestAnimationFrame(animate)

    stars.rotation.y += 0.0005
    stars.rotation.x += 0.0002

    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

// Hero 3D text
function initHero3DText() {
  const container = document.getElementById("hero-visual")

  if (!container || !window.THREE) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const spotLight = new THREE.SpotLight(0xffffff, 1)
  spotLight.position.set(10, 10, 10)
  spotLight.angle = 0.15
  spotLight.penumbra = 1
  scene.add(spotLight)

  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(-10, -10, -10)
  scene.add(pointLight)

  // Create 3D text
  if (window.THREE.FontLoader) {
    const fontLoader = new THREE.FontLoader()

    fontLoader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
      const textGeometry = new THREE.TextGeometry("DEV", {
        font: font,
        size: 0.8,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      })

      textGeometry.center()

      const textMaterial = new THREE.MeshStandardMaterial({ color: 0x5eead4 })
      const textMesh = new THREE.Mesh(textGeometry, textMaterial)

      scene.add(textMesh)

      // Animation
      function animate() {
        requestAnimationFrame(animate)

        textMesh.rotation.y += 0.01
        textMesh.rotation.x = Math.sin(Date.now() * 0.001) * 0.2

        renderer.render(scene, camera)
      }

      animate()
    })
  } else {
    // Fallback if FontLoader is not available
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({ color: 0x5eead4 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    function animate() {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()
  }

  camera.position.z = 5

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  })
}

// Skills graph
function initSkillsGraph() {
  const container = document.getElementById("skills-graph")

  if (!container || !window.THREE) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xffffff, 1)
  pointLight.position.set(10, 10, 10)
  scene.add(pointLight)

  // Skills data
  const skills = [
    // Frontend
    { name: "React", level: 90, category: "frontend", color: 0x61dafb },
    { name: "Next.js", level: 85, category: "frontend", color: 0xffffff },
    { name: "TypeScript", level: 80, category: "frontend", color: 0x3178c6 },
    { name: "Tailwind CSS", level: 95, category: "frontend", color: 0x38bdf8 },
    { name: "Framer Motion", level: 75, category: "frontend", color: 0xff4154 },

    // Backend
    { name: "Node.js", level: 85, category: "backend", color: 0x8cc84b },
    { name: "Express", level: 80, category: "backend", color: 0xffffff },
    { name: "MongoDB", level: 75, category: "backend", color: 0x47a248 },
    { name: "PostgreSQL", level: 70, category: "backend", color: 0x336791 },
    { name: "GraphQL", level: 65, category: "backend", color: 0xe535ab },

    // Other
    { name: "Git", level: 85, category: "other", color: 0xf05032 },
    { name: "Docker", level: 70, category: "other", color: 0x2496ed },
    { name: "AWS", level: 65, category: "other", color: 0xff9900 },
    { name: "CI/CD", level: 75, category: "other", color: 0x4caf50 },
    { name: "Testing", level: 80, category: "other", color: 0xff4081 },
  ]

  // Category positions
  const categoryPositions = {
    frontend: new THREE.Vector3(0, 0, 0),
    backend: new THREE.Vector3(0, -4, 0),
    other: new THREE.Vector3(0, -8, 0),
  }

  // Create category labels
  if (window.THREE.TextGeometry) {
    const fontLoader = new THREE.FontLoader()

    fontLoader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
      // Frontend label
      const frontendGeometry = new THREE.TextGeometry("Frontend", {
        font: font,
        size: 0.4,
        height: 0.1,
      })

      const frontendMaterial = new THREE.MeshBasicMaterial({ color: 0x5eead4 })
      const frontendMesh = new THREE.Mesh(frontendGeometry, frontendMaterial)
      frontendMesh.position.set(-2, 2, 0)
      scene.add(frontendMesh)

      // Backend label
      const backendGeometry = new THREE.TextGeometry("Backend", {
        font: font,
        size: 0.4,
        height: 0.1,
      })

      const backendMaterial = new THREE.MeshBasicMaterial({ color: 0xa78bfa })
      const backendMesh = new THREE.Mesh(backendGeometry, backendMaterial)
      backendMesh.position.set(-2, -2, 0)
      scene.add(backendMesh)

      // Other label
      const otherGeometry = new THREE.TextGeometry("Other", {
        font: font,
        size: 0.4,
        height: 0.1,
      })

      const otherMaterial = new THREE.MeshBasicMaterial({ color: 0xf472b6 })
      const otherMesh = new THREE.Mesh(otherGeometry, otherMaterial)
      otherMesh.position.set(-2, -6, 0)
      scene.add(otherMesh)
    })
  }

  // Create skill nodes
  const frontendSkills = skills.filter((skill) => skill.category === "frontend")
  const backendSkills = skills.filter((skill) => skill.category === "backend")
  const otherSkills = skills.filter((skill) => skill.category === "other")

  // Helper function to position skills
  function getPositionForSkill(skill, index, total) {
    const categoryMultiplier = skill.category === "frontend" ? 0 : skill.category === "backend" ? 1 : 2

    const angle = (Math.PI * 2 * index) / total
    const radius = 3 + (skill.level / 100) * 2

    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius + (categoryMultiplier - 1) * 4
    const z = 0

    return new THREE.Vector3(x, y, z)
  }

  // Create skill nodes
  function createSkillNode(skill, index, total) {
    const position = getPositionForSkill(skill, index, total)

    // Create sphere
    const geometry = new THREE.SphereGeometry(0.3 + (skill.level / 100) * 0.3, 16, 16)
    const material = new THREE.MeshStandardMaterial({
      color: skill.color,
      transparent: true,
      opacity: 0.7,
      emissive: skill.color,
      emissiveIntensity: 0.2,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.copy(position)
    scene.add(mesh)

    // Create line to category center
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([position, categoryPositions[skill.category]])

    const lineMaterial = new THREE.LineBasicMaterial({
      color: skill.color,
      transparent: true,
      opacity: 0.3,
    })

    const line = new THREE.Line(lineGeometry, lineMaterial)
    scene.add(line)

    // Create HTML label
    const skillDiv = document.createElement("div")
    skillDiv.className = "skill-label"
    skillDiv.textContent = skill.name
    skillDiv.style.position = "absolute"
    skillDiv.style.color = "#ffffff"
    skillDiv.style.padding = "2px 6px"
    skillDiv.style.borderRadius = "4px"
    skillDiv.style.fontSize = "10px"
    skillDiv.style.fontWeight = "bold"
    skillDiv.style.backgroundColor = "#" + skill.color.toString(16).padStart(6, "0")
    skillDiv.style.transform = "translate(-50%, -50%)"
    skillDiv.style.pointerEvents = "none"
    container.appendChild(skillDiv)

    // Update label position in animation loop
    return {
      mesh,
      label: skillDiv,
      position,
      skill,
    }
  }

  // Create all skill nodes
  const frontendNodes = frontendSkills.map((skill, i) => createSkillNode(skill, i, frontendSkills.length))
  const backendNodes = backendSkills.map((skill, i) => createSkillNode(skill, i, backendSkills.length))
  const otherNodes = otherSkills.map((skill, i) => createSkillNode(skill, i, otherSkills.length))

  const allNodes = [...frontendNodes, ...backendNodes, ...otherNodes]

  // Set camera position
  camera.position.set(0, -4, 12)

  // Add orbit controls if available
  let controls
  if (window.THREE.OrbitControls) {
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.minPolarAngle = Math.PI / 3
    controls.maxPolarAngle = Math.PI / 1.5
    controls.rotateSpeed = 0.5
  }

  // Animation
  function animate() {
    requestAnimationFrame(animate)

    // Update HTML labels
    allNodes.forEach((node) => {
      const vector = node.position.clone()
      vector.project(camera)

      const x = (vector.x * 0.5 + 0.5) * container.clientWidth
      const y = (vector.y * -0.5 + 0.5) * container.clientHeight

      node.label.style.left = x + "px"
      node.label.style.top = y + "px"
    })

    if (controls) controls.update()

    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  })
}

// Projects gallery
function initProjectsGallery() {
  const container = document.getElementById("projects-gallery")

  if (!container || !window.THREE) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const spotLight = new THREE.SpotLight(0xffffff, 1)
  spotLight.position.set(10, 10, 10)
  spotLight.angle = 0.15
  spotLight.penumbra = 1
  spotLight.castShadow = true
  scene.add(spotLight)

  // Create project planes
  const projects = [
    { id: 1, title: "E-Commerce Platform" },
    { id: 2, title: "Task Management App" },
    { id: 3, title: "Social Media Dashboard" },
    { id: 4, title: "Real Estate Listing Platform" },
    { id: 5, title: "Weather Application" },
  ]

  const projectMeshes = []
  const radius = 5

  projects.forEach((project, index) => {
    const angle = (2 * Math.PI * index) / projects.length
    const x = radius * Math.sin(angle)
    const z = radius * Math.cos(angle)

    const geometry = new THREE.PlaneGeometry(2.5, 1.5)
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1,
      wireframe: index !== 0,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(x, 0, z)
    mesh.rotation.y = -angle
    mesh.userData = { project, index }

    scene.add(mesh)
    projectMeshes.push(mesh)
  })

  // Add project titles if TextGeometry is available
  if (window.THREE.TextGeometry) {
    const fontLoader = new THREE.FontLoader()

    fontLoader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

      projectMeshes.forEach((mesh, index) => {
        if (index === 0) {
          // Only show title for active project
          const textGeometry = new THREE.TextGeometry(projects[index].title, {
            font: font,
            size: 0.2,
            height: 0.05,
          })

          textGeometry.center()

          const textMesh = new THREE.Mesh(textGeometry, textMaterial)
          textMesh.position.set(mesh.position.x, -1.2, mesh.position.z)
          textMesh.rotation.y = mesh.rotation.y

          scene.add(textMesh)
        }
      })
    })
  }

  // Set camera position
  camera.position.set(0, 0, 8)

  // Add orbit controls if available
  let controls
  if (window.THREE.OrbitControls) {
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.minPolarAngle = Math.PI / 2 - Math.PI / 4
    controls.maxPolarAngle = Math.PI / 2 + Math.PI / 4
    controls.minAzimuthAngle = -Math.PI / 4
    controls.maxAzimuthAngle = Math.PI / 4
  }

  // Animation
  function animate() {
    requestAnimationFrame(animate)

    // Gentle floating animation
    projectMeshes.forEach((mesh, index) => {
      mesh.position.y = Math.sin(Date.now() * 0.001 + index) * 0.1
    })

    if (controls) controls.update()

    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  })

  // Update active project when navigation changes
  window.updateActiveProject = (index) => {
    projectMeshes.forEach((mesh, i) => {
      mesh.material.wireframe = i !== index
      mesh.material.color.set(i === index ? 0x5eead4 : 0xffffff)
      mesh.scale.set(i === index ? 1.2 : 0.8, i === index ? 1.2 : 0.8, i === index ? 1.2 : 0.8)
    })
  }
}

