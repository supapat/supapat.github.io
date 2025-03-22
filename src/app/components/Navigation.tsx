'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

// Define color scheme
const colors = {
  primary: '#64b5f6', // Light blue
  primaryLight: '#9be7ff',
  primaryDark: '#2286c3',
  secondary: '#e0e0e0', // Light gray
  secondaryLight: '#f5f5f5',
  secondaryDark: '#9e9e9e',
  text: '#424242',
  textLight: '#757575',
  white: '#ffffff'
};

interface NavigationProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Navigation({ aboutRef, skillsRef, experienceRef, projectsRef }: NavigationProps) {
  // Scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: colors.primary, boxShadow: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Supapat Reantong
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit" onClick={() => scrollToSection(aboutRef)}>About</Button>
          <Button color="inherit" onClick={() => scrollToSection(skillsRef)}>Skills</Button>
          <Button color="inherit" onClick={() => scrollToSection(experienceRef)}>Experience</Button>
          <Button color="inherit" onClick={() => scrollToSection(projectsRef)}>Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
