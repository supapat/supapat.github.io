'use client';

import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
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

interface WorkExperienceSectionProps {
  workExperienceRef: RefObject<HTMLDivElement | null>;
}

export default function WorkExperienceSection({ workExperienceRef }: WorkExperienceSectionProps) {
  return (
    <Box 
      ref={workExperienceRef}
      sx={{ p: 5, bgcolor: colors.secondaryLight }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: colors.primary, mb: 4 }}>
        Work Experience
      </Typography>
      
      <Timeline position="alternate">
        {/* Experience 1 - Current */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Typography variant="subtitle2">2023 - Present</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Bindzer Tech Co., Ltd.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: colors.primary }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: colors.primary }} />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ p: 2, bgcolor: colors.white, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.primary }}>
                Web System Development
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text, mt: 1 }}>
                • Product management system (Using NuxtJS)
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Insurance Quote System - TQR Public Company Limited (Using React, NestJS, MySQL)
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Develop web systems as assigned by UX/UI design and System Analysts
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • As a web development consultant for the organization
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Improve the website or content to be familiar with Search engine optimization (SEO)
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        
        {/* Experience 2 */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Typography variant="subtitle2">2020 - 2022</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Thathrit Co., Ltd.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: colors.primary }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: colors.primary }} />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ p: 2, bgcolor: colors.white, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.primary }}>
                Web System Development
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text, mt: 1 }}>
                • Marketplace (Using NuxtJS, Laravel and property Using NuxtJS, Laravel, Express.JS, Socket.io, MySQL)
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Engagement and Advertising (Using NuxtJS, Laravel, MySQL)
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Create a system-wide web application structure, e.g. Web Front End, Back End and Cloud Server
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Develop web systems as assigned by UX/UI design and System Analysts
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Get the requirements to bring to the design of the web system
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Improve the website or content to be familiar with Search engine optimization (SEO)
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Uses Docker as a building environment, and works with NGINX to reverse-proxy
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Set up a production system on Alibaba cloud
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        
        {/* Experience 3 */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Typography variant="subtitle2">Apr. 2020 - Aug. 2020</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Powermatic Co. Ltd</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: colors.primary }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: colors.primary }} />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ p: 2, bgcolor: colors.white, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.primary }}>
                Programmer
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text, mt: 1 }}>
                • Web applications development and mobile applications
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Front-end: Html, CSS, Blazor, Java, Bootstrap, JavaScript, jQuery
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Back-end: .Net, PHP, MySQL
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        
        {/* Experience 4 */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Typography variant="subtitle2">Jul. 2018 - Feb. 2020</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Zawanna Technology Co., LTD</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: colors.primary }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: colors.primary }} />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ p: 2, bgcolor: colors.white, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.primary }}>
                System Engineer
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text, mt: 1 }}>
                • Web applications development and mobile applications
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Front-end: Html, CSS, React Native, Bootstrap, Vue JS, JavaScript, jQuery
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}>
                • Back-end: .Net, Laravel, PHP, MySQL, MariaDB, PostgreSQL
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
