document.addEventListener('DOMContentLoaded', (event) => {
    
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 200);

    
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('floating');
            setTimeout(() => {
                item.classList.remove('floating');
            }, 1000);
        });
    });

   
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Jasny motyw';
        } else {
            themeToggle.textContent = 'Ciemny motyw';
        }
    });

  
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.005)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
        });
    });

    
    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        job.addEventListener('click', () => {
            job.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
            setTimeout(() => {
                job.style.backgroundColor = 'rgba(255,255,255,0.5)';
            }, 300);
        });
    });

    
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        header.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    });

    
    const contactLinks = document.querySelectorAll('.contact-info a');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', () => {
            link.style.textDecoration = 'none';
        });
    });

    
    const icons = document.querySelectorAll('.fas, .fab');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });

   
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            project.style.boxShadow = '0 0 15px rgba(52, 152, 219, 0.5)';
            setTimeout(() => {
                project.style.boxShadow = 'none';
            }, 300);
        });
    });


 

   
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#222" },
            shape: { type: "circle" },
            opacity: { value: 1, random: true },
            size: { value: 5, random: true },
            move: { enable: true, speed: 1 }
        }
    });


const data = [
    { technology: 'JavaScript', procent: 75 },
    { technology: 'HTML5', procent: 73 },
    { technology: 'CSS5', procent: 35 },
    { technology: 'Bootstrap', procent: 58 },
    { technology: 'Sass', procent: 72 },
    { technology: 'React', procent: 47 },
    { technology: 'Node.js', procent: 51 },
    { technology: 'Docker', procent: 36 },
    { technology: 'XML', procent: 60 },
    { technology: 'Figma', procent: 25 },
    { technology: 'VSC', procent: 73 },
];

const margin = { top: 30, right: 20, bottom: 100, left: 50 };
const width = 500 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

const svg = d3.select('#experience-chart')
    .append('svg')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

    const colors = {
      JavaScript: "#f39c12",
      HTML5: "#d35400",
      CSS5: "#2980b9",
      Bootstrap: "#8e44ad",
      Sass: "#cc6699",
      React: " #61DAFB",
      NodeJS: "#339933",
      Docker: "#1e90ff",
      XML: "#16a085",
      Figma: "#c0392b",
      VSC: "#2c3e50",
    };

const x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);

const y = d3.scaleLinear()
    .range([height, 0]);

x.domain(data.map(d => d.technology));

y.domain([0, 100]);


svg.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(y)
        .tickSize(-width)
        .tickFormat(''));


svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.technology))
    .attr('width', x.bandwidth())
    .attr('y', height) 
    .attr('height', 0)  
    .attr('fill', d => colors[d.technology])  
    .transition()  
    .duration(800)
    .attr('y', d => y(d.procent))
    .attr('height', d => height - y(d.procent));


svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'rotate(-45)')  
    .style('text-anchor', 'end')       
    .style('font-size', '14px')       
    .style('fill', '#2c3e50')          
    .style('font-weight', 'bold');


svg.append('g')
    .call(d3.axisLeft(y)
        .tickValues([100]) 
        .tickFormat(d => '100%')  
    );


svg.selectAll('.label')
    .data(data)
    .enter().append('text')
    .attr('class', 'label')
    .attr('x', d => x(d.technology) + x.bandwidth() / 2)
    .attr('y', d => y(d.procent) - 5)
    .text(d => `${d.procent}%`);

    

    // const timelineData = [
    //     { year: 2017, event: 'Ukończenie studiów' },
    //     { year: 2018, event: 'Pierwszy projekt open source' },
    //     { year: 2019, event: 'Awans na Senior Developera' },
    //     { year: 2020, event: 'Rozpoczęcie pracy w Innowacyjne Rozwiązania IT' },
    //     { year: 2021, event: 'Certyfikacja AWS' }
    // ];

    // const timeline = document.getElementById('career-timeline');
    // timelineData.forEach((item, index) => {
    //     const dot = document.createElement('div');
    //     dot.className = 'timeline-dot';
    //     dot.style.left = `${index * (100 / (timelineData.length - 1))}%`;
    //     dot.style.top = '50%';

    //     const info = document.createElement('div');
    //     info.className = 'timeline-info';
    //     info.textContent = `${item.year}: ${item.event}`;
    //     info.style.left = `${index * (100 / (timelineData.length - 1))}%`;
    //     info.style.top = 'calc(50% + 30px)';

    //     dot.addEventListener('mouseover', () => {
    //         info.style.display = 'block';
    //     });

    //     dot.addEventListener('mouseout', () => {
    //         info.style.display = 'none';
    //     });

    //     timeline.appendChild(dot);
    //     timeline.appendChild(info);
    // });
});