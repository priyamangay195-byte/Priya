// ===== CREATE STYLE =====
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffe6f0; /* Light pink */
  }

  header {
    background-color: #fff;
    text-align: center;
    padding: 30px 0;
  }

  header h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    background: linear-gradient(90deg, #ff6ec4, #ffb86c, #8be9fd, #50fa7b);
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    animation: jump 1s ease-in-out infinite alternate, colorShift 5s linear infinite;
  }

  @keyframes jump {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }

  @keyframes colorShift {
    0% { background-position: 0%; }
    100% { background-position: 100%; }
  }

  header p {
    color: maroon;
    font-size: 18px;
  }

  nav {
    background: #444;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }

  nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
  }

  nav a:hover {
    text-decoration: underline;
  }

  section {
    padding: 20px;
    background: white;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }

  section h2 {
    color: #d63384; /* Dark pink */
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input, textarea {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1em;
  }

  button {
    padding: 10px;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #555;
  }

  footer {
    text-align: center;
    padding: 15px;
    background: #333;
    color: white;
  }
`;
document.head.appendChild(style);

// ===== CREATE BODY STRUCTURE =====
document.body.innerHTML = `
  <header>
    <h1>Priyadharshini.B</h1>
    <p>Computer Science Student</p>
  </header>

  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="about">
    <h2>About Me</h2>
    <p>I am a passionate Computer Science student interested in web development, machine learning, and open-source projects.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="project">
      <h3>Weather App</h3>
      <p>A simple weather application using OpenWeatherMap API.</p>
    </div>
    <div class="project">
      <h3>Portfolio Website</h3>
      <p>This portfolio is a showcase of my work and skills using HTML, CSS, and JavaScript.</p>
    </div>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <form id="contactForm">
      <input type="text" id="name" placeholder="Your Name" required>
      <input type="email" id="email" placeholder="Your Email" required>
      <textarea id="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
      <p id="formStatus"></p>
    </form>
  </section>

  <footer>
    <p>&copy; 2025 Priyadharshini.B. All rights reserved.</p>
  </footer>
`;

// ===== FORM SUBMIT HANDLER =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (name && email && message) {
    status.textContent = `Thank you for your message, ${name}!`;
    status.style.color = "green";
    this.reset();
  } else {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
  }
});
