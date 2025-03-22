'use client';

import ChatIcon from '@mui/icons-material/Chat';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Avatar, Box, Card, CardActions, CardContent, Divider, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import { useState } from 'react';

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

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLine, setCopiedLine] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone' | 'line') => {
    navigator.clipboard.writeText(text);
    
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedLine(true);
      setTimeout(() => setCopiedLine(false), 2000);
    }
  };

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, borderBottom: `2px solid ${colors.primaryLight}`, pb: 1, color: '#ffffff', fontSize: '1.25rem' }}>
        Contact Information
      </Typography>
      
      <Card sx={{ bgcolor: 'rgba(255,255,255,0.15)', mb: 3, borderRadius: 2, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
              <LocationOnIcon />
            </Avatar>
            <Typography variant="body1" sx={{ color: colors.secondaryLight, fontWeight: 'medium' }}>
              Bangkok, Thailand <br />
              Pathum Thani, Thailand <br />
              Nonthaburi, Thailand
            </Typography>
          </Box>
          
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', my: 2 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
              <ChatIcon />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Line ID
              </Typography>
              <Typography variant="body1" sx={{ color: colors.secondaryLight, fontWeight: 'medium' }}>
                foremost_5678
              </Typography>
            </Box>
            <Tooltip title={copiedLine ? "คัดลอกแล้ว!" : "คัดลอก"} TransitionComponent={Zoom}>
              <IconButton 
                size="small" 
                sx={{ color: colors.secondaryLight, bgcolor: 'rgba(255,255,255,0.1)', 
                '&:hover': { bgcolor: colors.primary, color: colors.white } }}
                onClick={() => handleCopy('foremost_5678', 'line')}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
              <EmailIcon />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ color: colors.secondaryLight, fontWeight: 'medium' }}>
                supapat5678@gmail.com
              </Typography>
            </Box>
            <Tooltip title={copiedEmail ? "คัดลอกแล้ว!" : "คัดลอก"} TransitionComponent={Zoom}>
              <IconButton 
                size="small" 
                sx={{ color: colors.secondaryLight, bgcolor: 'rgba(255,255,255,0.1)', 
                '&:hover': { bgcolor: colors.primary, color: colors.white } }}
                onClick={() => handleCopy('supapat5678@gmail.com', 'email')}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>
              <PhoneIcon />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ color: colors.secondaryLight, fontWeight: 'medium' }}>
                090-331-6244
              </Typography>
            </Box>
            <Tooltip title={copiedPhone ? "คัดลอกแล้ว!" : "คัดลอก"} TransitionComponent={Zoom}>
              <IconButton 
                size="small" 
                sx={{ color: colors.secondaryLight, bgcolor: 'rgba(255,255,255,0.1)', 
                '&:hover': { bgcolor: colors.primary, color: colors.white } }}
                onClick={() => handleCopy('0903316244', 'phone')}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Tooltip title="อีเมล">
            <IconButton 
              sx={{ 
                color: colors.secondaryLight, 
                bgcolor: colors.primary, 
                mx: 1,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: colors.primaryLight,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }
              }}
              onClick={() => window.location.href = 'mailto:supapat5678@gmail.com'}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="โทรศัพท์">
            <IconButton 
              sx={{ 
                color: colors.secondaryLight, 
                bgcolor: colors.primary, 
                mx: 1,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: colors.primaryLight,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }
              }}
              onClick={() => window.location.href = 'tel:0903316244'}
            >
              <PhoneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Line">
            <IconButton 
              sx={{ 
                color: colors.secondaryLight, 
                bgcolor: colors.primary, 
                mx: 1,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  bgcolor: colors.primaryLight,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }
              }}
              onClick={() => window.open('https://line.me/ti/p/~foremost_5678', '_blank')}
            >
              <ChatIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
}
