'use client';

import CodeIcon from '@mui/icons-material/Code';
import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import { AppBar, Avatar, Box, Button, Container, Divider, Drawer, Fab, Fade, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Slide, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import { useRef, useState } from 'react';

// Import components
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import WorkExperienceSection from './components/WorkExperienceSection';

// Define color scheme
const colors = {
  primary: '#3f51b5', // Indigo
  primaryLight: '#757de8',
  primaryDark: '#002984',
  secondary: '#f5f5f5', // Light gray
  secondaryLight: '#ffffff',
  secondaryDark: '#c2c2c2',
  text: '#212121',
  textLight: '#484848',
  white: '#ffffff',
  accent: '#ff4081', // Pink accent
  sectionBg1: '#f9f9f9',
  sectionBg2: '#ffffff',
  footerBg: '#2c3e50'
};

// Hide AppBar on scroll down
interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Scroll to top button
function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Fade in={trigger}>
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          onClick={handleClick}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Fade>
    </Box>
  );
}

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  // Create refs for scrolling
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const workExperienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'About', icon: <PersonIcon />, ref: aboutRef },
    { name: 'Skills', icon: <CodeIcon />, ref: skillsRef },
    { name: 'Experience', icon: <WorkIcon />, ref: workExperienceRef },
    { name: 'Projects', icon: <FolderIcon />, ref: projectsRef },
    { name: 'Contact', icon: <EmailIcon />, ref: contactRef },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', color: colors.primary }}>
        Supapat Reantong
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }}
              onClick={() => scrollToSection(item.ref)}
            >
              <Box sx={{ mr: 1, color: colors.primary }}>{item.icon}</Box>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Navigation Bar */}
      <HideOnScroll>
        <AppBar position="sticky" sx={{ bgcolor: colors.primary, boxShadow: 2 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src="/images/profile.jpg"
                alt="Supapat Reantong"
                sx={{ width: 40, height: 40, mr: 2, border: `2px solid ${colors.white}` }}
              />
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold',
                  background: `linear-gradient(45deg, ${colors.white} 30%, ${colors.secondaryLight} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  msBackgroundClip: 'text',
                  msTextFillColor: 'transparent',
                  OBackgroundClip: 'text',
                  OTextFillColor: 'transparent',
                  letterSpacing: '0.5px'
                }}
              >
                Supapat Reantong
              </Typography>
            </Box>
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name}
                    color="inherit" 
                    onClick={() => scrollToSection(item.ref)}
                    sx={{ 
                      mx: 1,
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: colors.primaryLight,
                        transform: 'translateY(-2px)'
                      }
                    }}
                    startIcon={item.icon}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile navigation drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Container maxWidth={false} disableGutters sx={{ minHeight: '100vh' }}>
        {/* About Section */}
        <Box 
          ref={aboutRef}
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          {/* Left Section - Photo and Contact */}
          <Box sx={{ 
            bgcolor: colors.primary, 
            color: colors.white,
            width: { xs: '100%', md: '30%' },
            p: 4,
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
          }}>
            <Avatar
              src="/images/profile.jpg"
              alt="Supapat Reantong"
              sx={{ width: 200, height: 200, mb: 3, border: `4px solid ${colors.white}` }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 ,color: colors.white }}>
              Supapat Reantong
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: colors.white }}>
              Nickname: FOREMOST
            </Typography>
            
            <Box ref={contactRef}>
              <ContactSection />
            </Box>
          </Box>
          
          {/* Right Section - About Me Content */}
          <AboutSection aboutRef={aboutRef} />
        </Box>
        
        {/* Skills Section */}
        <Box sx={{ bgcolor: colors.sectionBg1, py: 2 }}>
          <Box ref={skillsRef}>
            <SkillsSection skillsRef={skillsRef} />
          </Box>
        </Box>
        
        {/* Experience Section - with alternating background */}
        <Box sx={{ bgcolor: colors.sectionBg2, py: 2 }}>
          <Box ref={workExperienceRef}>
            <WorkExperienceSection workExperienceRef={workExperienceRef} />
          </Box>
        </Box>
        
        {/* Projects Section - with alternating background */}
        <Box sx={{ bgcolor: colors.sectionBg1, py: 2 }}>
          <Box ref={projectsRef}>
            <ProjectsSection projectsRef={projectsRef} />
          </Box>
        </Box>
        
        {/* Footer */}
        <Box sx={{ 
          bgcolor: colors.footerBg, 
          color: colors.white, 
          py: 4, 
          textAlign: 'center',
          borderTop: `4px solid ${colors.primary}`
        }}>
          <Container>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Supapat Reantong
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 3,
              '& > a': { 
                mx: 1, 
                color: colors.white,
                transition: 'all 0.3s',
                '&:hover': {
                  color: colors.primaryLight,
                  transform: 'translateY(-3px)'
                }
              }
            }}>
              <Link href="mailto:supapat5678@gmail.com" target="_blank" aria-label="Email">
                <EmailIcon fontSize="large" />
              </Link>
              <Link href="https://www.linkedin.com/in/%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B9%8C-%E0%B9%80%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%8D%E0%B8%97%E0%B8%AD%E0%B8%87-1741111a6/" target="_blank" aria-label="LinkedIn">
                <LinkedInIcon fontSize="large" />
              </Link>
            </Box>
            
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 2 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CopyrightIcon sx={{ mr: 1, fontSize: 16 }} />
              <Typography variant="body2">
                {new Date().getFullYear()} Supapat Reantong. All Rights Reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
      <ScrollToTop />
    </>
  );
}
