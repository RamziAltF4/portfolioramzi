// App.js - VERSI YANG SUDAH DIPERBAIKI
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'; // <-- TAMBAHKAN ThemeProvider
import Navbar from './components/Navbar';
import SocialButtons from './components/SocialButtons';
import DarkModeToggle from './components/DarkModeToggle';
import ContactForm from "./components/Contactform";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // TAMBAHKAN THEME OBJECT
  const theme = {
    isDarkMode: isDarkMode
  };

  return (
    // TAMBAHKAN ThemeProvider DI SINI
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Container>
        <Header>
          <Logo>MyPortfolio</Logo>
          <Navbar />
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </Header>
        <HeroSection>
          <HeroContent>
            <Greeting>Hello, I'm</Greeting>
            <Name>Ramzi Althaf Putra Hermawan</Name>
            <Title>Website Development</Title>
            <Description>
              Saya seorang pengembang website yang passionate dalam membuat website yang menarik dan responsif.
            </Description>
            <CtaButton>Lihat Portofolio</CtaButton>
          </HeroContent>
          <HeroImage>
         <PlaceholderImage />
          </HeroImage>
        </HeroSection>

        <ProjectsSection id="projects">
          <SectionTitle>Website yang Pernah Saya Buat</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage />
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
  {project.demo && (
    <ProjectLink 
      href={project.demo} 
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </ProjectLink>
  )}

  <ProjectLink 
    href="https://github.com/RamziAltF4" 
    target="_blank"
    rel="noopener noreferrer"
  >
    Source Code
  </ProjectLink>
</ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>

        <AboutSection id="about">
          <SectionTitle>Tentang Saya</SectionTitle>
          <AboutContent>
            <AboutText>
              <p>Saya adalah seorang pengembang website dengan pengalaman dalam membuat berbagai website modern menggunakan React, Next.js, dan teknologi terkini lainnya.</p>
              <p>Saya selalu bersemangat untuk mempelajari hal-hal baru dan menciptakan solusi inovatif untuk masalah yang kompleks.</p>
            </AboutText>
            <Skills>
              <SkillCategory>
                <h3>Frontend</h3>
                <SkillList>
                  <SkillItem>HTML</SkillItem>
                  <SkillItem>CSS</SkillItem>
                  <SkillItem>JavaScript</SkillItem>
                  <SkillItem>React</SkillItem>
                  <SkillItem>Next.js</SkillItem>
                  <SkillItem>Tailwind CSS</SkillItem>
                  <SkillItem>Styled Components</SkillItem>
                </SkillList>
              </SkillCategory>
              <SkillCategory>
                <h3>Tools & Lainnya</h3>
                <SkillList>
                  <SkillItem>GitHub</SkillItem>
                  <SkillItem>Visual Studio Code</SkillItem>
                </SkillList>
              </SkillCategory>
            </Skills>
          </AboutContent>
        </AboutSection>

        <ContactSection id="contact">
          <SectionTitle>Hubungi Saya</SectionTitle>
          <ContactContainer>
            <ContactInfo>
              <p>Jangan ragu untuk menghubungi saya melalui media sosial di bawah ini:</p>
              <SocialButtons />
              <ContactForm />
            </ContactInfo>
          </ContactContainer>
        </ContactSection>

        <Footer>
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        </Footer>
      </Container>
    </ThemeProvider> // <-- TUTUP ThemeProvider
  );
};

// Data proyek (tetap sama)
const projects = [
  {
    title: "Website Kelas",
    description: "Website resmi kelas TPLE013 - Universitas Pamulang Viktor.",
    technologies: ["TypeScript", "PLpgSQL"],
    demo: "https://tple013.vercel.app/"
  },
  {
    title: "To Do List Tugas Mentari",
    description: "Website To-Do List Checklist Tugas Perkuliahan Universitas Pamulang merupakan sebuah website yang dirancang untuk membantu mahasiswa dalam mengelola dan memantau tugas-tugas akademik secara efektif.",
    technologies: ["HTML", "CSS", "LocalStorage","JavaScript"],
    demo: "https://todolistmentari.netlify.app/index.html"
  },
  {
    title: "Portfolio Website",
    description: "Website portfolio kreatif dengan galeri proyek dan formulir kontak.",
    technologies: ["Node.Js", "CSS", "JavaScript", "EmailJS"],
    demo: "ramziportfolio.vercel.app"
  },
];

// Styling Global
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#f8f9fa'};
    color: ${props => props.isDarkMode ? '#ffffff' : '#333333'};
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }
`;

// Styled Components (PERBAIKI PROPS THEME)
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme?.isDarkMode ? '#1a1a1a' : '#f8f9fa'};
  z-index: 1000;
  transition: background-color 0.3s ease;
  /* TAMBAHKAN: pastikan tidak ada border atau shadow yang mengganggu */
  border: none;
  box-shadow: none;
`;
const PlaceholderImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;

  background-image: url('/ramziportfolio.png'); /* taruh foto di folder public */
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 80px 0;
  min-height: 80vh;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  animation: fadeInUp 1s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Greeting = styled.p`
  font-size: 20px;
  color: #667eea;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;


const Title = styled.h3`
  font-size: 24px;
  color: #666;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: ${props => props.theme?.isDarkMode ? '#ccc' : '#666'}; // <-- TAMBAHKAN ?
`;

const CtaButton = styled.button`
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, #667eea, #764ba2);
  }
`;

const ProjectsSection = styled.section`
  padding: 80px 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme?.isDarkMode ? '#2d2d2d' : 'white'}; // <-- TAMBAHKAN ?
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  opacity: 0.7;
`;

const ProjectInfo = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme?.isDarkMode ? '#ccc' : '#666'}; // <-- TAMBAHKAN ?
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  padding: 5px 10px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border-radius: 5px;
  font-size: 12px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #764ba2;
  }
`;

const AboutSection = styled.section`
  padding: 80px 0;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 18px;
    color: ${props => props.theme?.isDarkMode ? '#ccc' : '#666'}; // <-- TAMBAHKAN ?
  }
`;

const Skills = styled.div`
  display: grid;
  gap: 30px;
`;

const SkillCategory = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #667eea;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillItem = styled.li`
  padding: 10px 20px;
  background: ${props => props.theme?.isDarkMode ? '#2d2d2d' : 'white'}; // <-- TAMBAHKAN ?
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
  }
`;

const ContactSection = styled.section`
  padding: 80px 0;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactInfo = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 30px;
    color: ${props => props.theme?.isDarkMode ? '#ccc' : '#666'}; // <-- TAMBAHKAN ?
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 40px 0;
  border-top: 1px solid ${props => props.theme?.isDarkMode ? '#333' : '#ddd'}; // <-- TAMBAHKAN ?
`;

export default App;