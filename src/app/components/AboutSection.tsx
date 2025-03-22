'use client';

import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Chip, Divider, Grid, Paper, Typography } from '@mui/material';
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
  accent: '#ff4081' // Pink accent
};

interface AboutSectionProps {
  aboutRef: RefObject<HTMLDivElement | null>;
}

export default function AboutSection({ aboutRef }: AboutSectionProps) {
  return (
    <Box 
      ref={aboutRef}
      sx={{ 
        width: { xs: '100%', md: '70%' },
        p: 4,
        bgcolor: colors.white
      }}
    >
      <Box sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <PersonIcon sx={{ color: colors.primary, mr: 1, fontSize: 32 }} />
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: colors.primary }}>
            About Me
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {/* ส่วนซ้าย - ข้อมูลหลัก */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '8px', 
                height: '100%', 
                bgcolor: colors.primary 
              }} />
              
              <Typography variant="h5" sx={{ fontWeight: 'medium', color: colors.text, mb: 3, pl: 1 }}>
                Full Stack Web Developer
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2, color: colors.text, pl: 1 }}>
                I&apos;m a passionate Full Stack Web Developer with experience in building responsive and user-friendly web applications. I specialize in both frontend and backend development, with a focus on creating clean, efficient, and maintainable code.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2, color: colors.text, pl: 1 }}>
                With a strong foundation in modern web technologies and frameworks, I enjoy tackling complex problems and turning ideas into functional and beautiful web solutions. I&apos;m constantly learning and adapting to new technologies to stay at the forefront of web development.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 2, color: colors.text, pl: 1 }}>
                I&apos;m dedicated to delivering high-quality work and providing exceptional user experiences through thoughtful design and robust implementation.
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3, pl: 1 }}>
                <Chip icon={<LocationOnIcon />} label="Bangkok, Thailand" color="primary" variant="outlined" />
                <Chip icon={<LocationOnIcon />} label="Pathum Thani, Thailand" color="primary" variant="outlined" />
                <Chip icon={<LocationOnIcon />} label="Nonthaburi, Thailand" color="primary" variant="outlined" />
                <Chip label="Available for Freelance" color="success" />
                <Chip label="Employment Agreement" color="success" />
              </Box>
            </Paper>
          </Grid>
          
          {/* ส่วนขวา - ข้อมูลเพิ่มเติม */}
          <Grid item xs={12} md={5}>
            <Grid container direction="column" spacing={2}>
              {/* การศึกษา */}
              <Grid item>
                <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SchoolIcon sx={{ color: colors.primary, mr: 1 }} />
                    <Typography variant="h6" sx={{ color: colors.primary }}>
                      Education
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    EASTERN ASIA UNIVERSITY
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textLight }}>
                    Information Technology | 2018
                  </Typography>
                </Paper>
              </Grid>
              
              {/* ความสนใจ */}
              <Grid item>
                <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <FavoriteIcon sx={{ color: colors.primary, mr: 1 }} />
                    <Typography variant="h6" sx={{ color: colors.primary }}>
                      Interests
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip size="small" label="Web Development" />
                    <Chip size="small" label="UI/UX Design" />
                    <Chip size="small" label="Mobile Apps" />
                    <Chip size="small" label="AI & ML" />
                  </Box>
                </Paper>
              </Grid>
              
              {/* ทักษะหลัก */}
              <Grid item>
                <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CodeIcon sx={{ color: colors.primary, mr: 1 }} />
                    <Typography variant="h6" sx={{ color: colors.primary }}>
                      Core Skills
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip size="small" label="React" color="primary" variant="outlined" />
                    <Chip size="small" label="NextJS" color="primary" variant="outlined" />
                    <Chip size="small" label="Vue" color="primary" variant="outlined" />
                    <Chip size="small" label="TypeScript" color="primary" variant="outlined" />
                    <Chip size="small" label="Laravel" color="primary" variant="outlined" />
                    <Chip size="small" label="Node.js" color="primary" variant="outlined" />
                    <Chip size="small" label="NestJS" color="primary" variant="outlined" />
                    <Chip size="small" label="MySQL" color="primary" variant="outlined" />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
