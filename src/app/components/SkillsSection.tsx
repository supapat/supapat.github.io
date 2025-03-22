'use client';

import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CssIcon from '@mui/icons-material/Css';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import { Avatar, Box, Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import { RefObject } from 'react';

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
  chipBg: '#e0e0e0', // Light gray for chips
  chipText: '#212121' // Dark text for chips
};

// Skill item component with icon or image
const SkillItem = ({ name, icon, imageUrl }: { name: string; icon?: React.ReactNode; imageUrl?: string }) => (
  <Chip
    icon={
      icon ? (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: -0.5 }}>
          {icon}
        </Box>
      ) : imageUrl ? (
        <Box 
          component="img" 
          src={imageUrl} 
          alt={name} 
          sx={{ 
            width: 20, 
            height: 20, 
            ml: -0.5,
            objectFit: 'contain'
          }} 
        />
      ) : undefined
    }
    label={name}
    sx={{
      bgcolor: colors.chipBg,
      color: colors.chipText,
      mb: 1,
      mr: 1,
      height: 32,
      '& .MuiChip-icon': {
        color: colors.chipText
      },
      '&:hover': {
        bgcolor: colors.secondaryDark
      }
    }}
  />
);

interface SkillsSectionProps {
  skillsRef: RefObject<HTMLDivElement | null>;
}

export default function SkillsSection({ skillsRef }: SkillsSectionProps) {
  // Frontend skills with icons or image URLs
  const frontendSkills = [
    { name: 'HTML', icon: <HtmlIcon fontSize="small" /> },
    { name: 'CSS', icon: <CssIcon fontSize="small" /> },
    { name: 'CSS3', icon: <CssIcon fontSize="small" /> },
    { name: 'JavaScript', icon: <JavascriptIcon fontSize="small" /> },
    { name: 'TypeScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React Native', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'NextJS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'NuxtJS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Vue JS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Bootstrap', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'jQuery', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: 'Redux', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' }
  ];
  
  // Backend skills with icons or image URLs
  const backendSkills = [
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Node JS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'C', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PHP', icon: <PhpIcon fontSize="small" /> },
    { name: '.Net', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'Laravel', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'C#', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'NestJS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    { name: 'Express.JS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
  ];
  
  // Database skills with icons or image URLs
  const databaseSkills = [
    { name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'SQLite', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'Firebase', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Oracle', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'SQL Server', icon: <StorageIcon fontSize="small" /> }
  ];
  
  // Tools & Deployment skills with icons or image URLs
  const toolsSkills = [
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: <GitHubIcon fontSize="small" /> },
    { name: 'GitLab', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'VS Code', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Visual Studio', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'Docker', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'AWS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Azure', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Google Cloud', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Heroku', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
    { name: 'Netlify', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    { name: 'Vercel', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Windows', icon: <DesktopWindowsIcon fontSize="small" /> },
    { name: 'Linux', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'macOS', icon: <AppleIcon fontSize="small" /> },
    { name: 'Android', icon: <AndroidIcon fontSize="small" /> },
    { name: 'iOS', icon: <AppleIcon fontSize="small" /> }
  ];

  return (
    <Box 
      ref={skillsRef}
      sx={{ 
        p: 5, 
        bgcolor: colors.white 
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <CodeIcon sx={{ color: colors.primary, mr: 1, fontSize: 32 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: colors.primary }}>
          Programming Skills
        </Typography>
      </Box>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          With over 5 years of experience in web application development, I have developed a diverse set of skills in both Frontend and Backend, as well as working with various databases and tools that enhance development efficiency.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Frontend */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
                  <WebIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.text }}>
                  Frontend
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Stack direction="row" flexWrap="wrap">
                {frontendSkills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} icon={skill.icon} imageUrl={skill.imageUrl} />
                ))}
              </Stack>
            </Box>
          </Grid>
          
          {/* Backend */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
                  <DataObjectIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.text }}>
                  Backend
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Stack direction="row" flexWrap="wrap">
                {backendSkills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} icon={skill.icon} imageUrl={skill.imageUrl} />
                ))}
              </Stack>
            </Box>
          </Grid>
          
          {/* Database */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
                  <StorageIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.text }}>
                  Database
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Stack direction="row" flexWrap="wrap">
                {databaseSkills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} icon={skill.icon} imageUrl={skill.imageUrl} />
                ))}
              </Stack>
            </Box>
          </Grid>
          
          {/* Tools & Deployment */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
                  <BuildIcon />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: colors.text }}>
                  Tools & Deployment
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Stack direction="row" flexWrap="wrap">
                {toolsSkills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} icon={skill.icon} imageUrl={skill.imageUrl} />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
