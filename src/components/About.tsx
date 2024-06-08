import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

const About: React.FC = () => {
  return (
    <Box sx={{ width: "100%", padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>

      {/* Introduction Paragraph */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="body1">
          Hi, I'm Narayani, a 22-year-old content writer specializing in media
          research and operations for websites and social media. With a passion
          for creating engaging content and a knack for coordinating complex
          projects, I have gained valuable experience through internships at
          renowned organizations. My skills span across various tools and
          platforms, and I'm always eager to learn and adapt to new challenges.
          Here's a closer look at my journey, skills, education, and
          professional experiences.
        </Typography>
      </Paper>

      {/* Contact Info */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Typography>
          Email:{" "}
          <Link href="mailto:narayani0105@gmail.com">
            narayani0105@gmail.com
          </Link>
        </Typography>
        <Typography>Phone: 8827731842</Typography>
      </Paper>

      {/* Experience */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Experience
        </Typography>
        {[
          {
            title: "Brand Avatar | Content Writer (Intern)",
            duration: "December 2022 - March 2023",
            responsibilities: [
              "Assisted in conceptualizing content for websites, social media, advertisements, and emails.",
              "Assisted in preparing concepts and themes for events and brands.",
              "Coordinated with vendors, designers, and clients for smooth completion of tasks.",
              "Coordinated drafting internal and external communication materials.",
              "Closely worked on TN Government's event and Company's flagship event.",
            ],
          },
          {
            title: "Chennaiyin FC | Junior Media Manager (Intern)",
            duration: "October 2022 - February 2023",
            responsibilities: [
              "Handled media operations at stadium for home matches.",
              "In-charge for Pre & Post match press conferences.",
              "Assisted in video shoot production for promotional campaigns.",
              "Coordinated with regional media for press releases.",
              "Assisted in conducting interviews with players.",
              "Coordinated with multiple vendors, internal and external stakeholders for match day operations.",
            ],
          },
          {
            title: "Teaswing | Content Writer (Intern)",
            duration: "January 2022 - March 2022",
            responsibilities: [
              "Researching and writing SEO friendly content for blogs, newsletters and product description.",
              "Editing web copies and converting product information into crisp and engaging copies.",
            ],
          },
        ].map((job, index) => (
          <Card sx={{ marginBottom: 2 }} key={index}>
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>
              <Typography>{job.duration}</Typography>
              <Typography variant="subtitle1">Key Responsibilities:</Typography>
              <List>
                {job.responsibilities.map((resp, idx) => (
                  <ListItem key={idx}>
                    <ListItemText primary={resp} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Paper>

      {/* Skills */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <List>
          {[
            "Adobe Indesign",
            "Adobe Illustrator",
            "Canva",
            "Photoshop",
            "Hootsuite",
            "Surfer SEO",
            "MS Word",
            "MS Excel",
          ].map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Education Background */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Education Background
        </Typography>
        {[
          {
            degree: "Bachelor of Arts (B.A.), Journalism",
            school: "Madras Christian College, Chennai, Tamil Nadu",
            duration: "2020 - 2023",
          },
          {
            degree: "Senior Secondary (XII), Commerce",
            school: "Krishna Public School (CBSE board), Bhilai, Chhattisgarh",
            duration: "Year of completion: 2020",
          },
        ].map((edu, index) => (
          <Card sx={{ marginBottom: 2 }} key={index}>
            <CardContent>
              <Typography variant="h6">{edu.degree}</Typography>
              <Typography>{edu.school}</Typography>
              <Typography>{edu.duration}</Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>

      {/* References */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          References
        </Typography>
        <List>
          {[
            {
              name: "Azhar Mohammed",
              title: "Assistant PR Manager",
              company: "Chennaiyin FC",
              contact: "89392 92052",
            },
            {
              name: "Pandiyan Kannadasan",
              title: "Creative Lead",
              company: "Brand Avatar",
              contact: "97889 82825",
            },
            {
              name: "Bhavesh Bhati",
              title: "Head, E-Commerce",
              company: "Teaswing",
              contact: "70145 51106",
            },
          ].map((ref, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${ref.name} - ${ref.title}, ${ref.company} - ${ref.contact}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Languages known */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Languages Known
        </Typography>
        <List>
          {[
            "Magazine Journalism",
            "Media Research",
            "Newspaper Production",
            "Content Head - PR Campaign (Iragu)",
            "Radio Journalism",
          ].map((lang, index) => (
            <ListItem key={index}>
              <ListItemText primary={lang} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default About;
