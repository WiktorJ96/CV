document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.transform = "translateY(0)";
  }, 200);

  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("floating");
      setTimeout(() => {
        item.classList.remove("floating");
      }, 1000);
    });
  });

  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeToggle.textContent = "Jasny motyw";
    } else {
      themeToggle.textContent = "Ciemny motyw";
    }
  });

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      section.style.transform = "scale(1.005)";
    });
    section.addEventListener("mouseleave", () => {
      section.style.transform = "scale(1)";
    });
  });

  const jobs = document.querySelectorAll(".job");
  jobs.forEach((job) => {
    job.addEventListener("click", () => {
      job.style.backgroundColor = "rgba(52, 152, 219, 0.1)";
      setTimeout(() => {
        job.style.backgroundColor = "rgba(255,255,255,0.5)";
      }, 300);
    });
  });

  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    header.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
  });

  const contactLinks = document.querySelectorAll(".contact-info a");
  contactLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.textDecoration = "underline";
    });
    link.addEventListener("mouseleave", () => {
      link.style.textDecoration = "none";
    });
  });

  const icons = document.querySelectorAll(".fas, .fab");
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "rotate(360deg)";
      icon.style.transition = "transform 0.5s ease";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "rotate(0deg)";
    });
  });

  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("click", () => {
      project.style.boxShadow = "0 0 15px rgba(52, 152, 219, 0.5)";
      setTimeout(() => {
        project.style.boxShadow = "none";
      }, 300);
    });
  });

  

  const data = [
    { technology: "JavaScript", procent: 74 },
    { technology: "HTML5", procent: 71 },
    { technology: "CSS5", procent: 32 },
    { technology: "Bootstrap", procent: 56 },
    { technology: "Sass", procent: 68 },
    { technology: "React", procent: 42 },
    { technology: "NodeJS", procent: 45 },
    { technology: "ExpressJS", procent: 54 },
    { technology: "Docker", procent: 32 },
    { technology: "MongoDB", procent: 48 },
    { technology: "API", procent: 56},
    { technology: "XML", procent: 56 },
    { technology: "JSON", procent: 78 },
    { technology: "Postman", procent: 58 },
    { technology: "Figma", procent: 27 },
    { technology: "VSC", procent: 71 },
    { technology: "IntelliJ", procent: 50 },
    { technology: "XMLStudio", procent: 60 },
  ];

  const margin = { top: 30, right: 20, bottom: 100, left: 50 };
  const width = 500 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  const svg = d3
    .select("#experience-chart")
    .append("svg")
    .attr(
      "viewBox",
      `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
    )
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const gradients = {
  JavaScript: ["#ffd700", "#ffea00", "#ffc400"], // Gradient JS
  HTML5: ["#ff6b6b", "#ff7253", "#ffa94d"], // Gradient HTML5
  CSS5: ["#4e6ec8", "#83c0fa", "#4e81c8"], // Gradient CSS5
  Bootstrap: ["#563d7c", "#6f42c1", "#7952b3"], // Gradient Bootstrap
  Sass: ["#cf649a", "#f7a8c1", "#c76494"], // Gradient Sass
  React: ["#2d9cdb", "#61dafb"], // Gradient React
  NodeJS: ["#215732", "#8cc84b"], // Gradient Node.js
  ExpressJS: ["#7aae76", "#333332", "#212121", "hsla(0, 0%, 0%, 0.92)"], // Gradient Express.js
  Docker: ["#0db7ed", "#384d54", "#0db7ed"], // Gradient Docker
  MongoDB: ["#47A248", "#67B35F", "#369E4B"], // Gradient MongoDB
  API: ["#0078D7", "#00A8FF", "#003F88"], // Gradient API
  XML: ["#e066b3", "#a6d761", "#f5b14d", "#3393e0"], // Gradient XML
  JSON: ["#404040", "#4d4d4d", "#b3b3b3"], // Gradient JSON
  Postman: ["#ff6c37", "#ff8a00"], // Gradient Postman
  Figma: ["#ff7262", "#f24e1e", "#ff7262"], // Gradient Figma
  VSC: ["#007acc", "#1f9cf0", "#00b4ab"], // Gradient Visual Studio Code
  IntelliJ: ["#ec4c8a", "#9933cc", "#3a80f7", "#2c387e"], // Gradient IntelliJ IDEA
  XMLStudio: ["#003366", "#3399cc", "#d9d9d9"], // Gradient XMLStudio
};



const defs = svg.append("defs");

Object.keys(gradients).forEach((tech) => {
  const gradient = defs
    .append("linearGradient")
    .attr("id", `gradient-${tech}`)
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");

  gradient
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", gradients[tech][0]);

  gradient
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", gradients[tech][1]);
});



  const x = d3.scaleBand().range([0, width]).padding(0.2);
  const y = d3.scaleLinear().range([height, 0]);

  x.domain(data.map((d) => d.technology));
  y.domain([0, 100]);

  svg
    .append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.technology))
  .attr("width", x.bandwidth())
  .attr("y", height)
  .attr("height", 0)
  .attr("fill", (d) => `url(#gradient-${d.technology})`) // Gradient dla technologii
  .transition()
  .duration(800)
  .attr("y", (d) => y(d.procent))
  .attr("height", (d) => height - y(d.procent));


  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end")
    .style("font-size", "14px")
    .style("fill", "#2c3e50")
    .style("font-weight", "bold");

  svg.append("g").call(
    d3
      .axisLeft(y)
      .tickValues([100])
      .tickFormat((d) => "100%")
  );

  svg
    .selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d) => x(d.technology) + x.bandwidth() / 2)
    .attr("y", (d) => y(d.procent) - 5)
    .text((d) => `${d.procent}`);
});
