import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
} from "@mui/material";

const articles = [
  {
    title: "Grassroots media and active citizenship",
    date: "Sept 22, 2021",
    description:
      "The Nudge Forum's virtual conference on August 13, 2021, featured panelists Meera Devi, Dhanya Rajendran, and Barkha Dutt discussing the crucial role of grassroots media in enhancing citizen participation and pulling government services.",
    image: "https://via.placeholder.com/400",
    link: "/article1",
  },
  {
    title: "Empowering voices on ground",
    date: "Sept 22, 2021",
    description:
      "The Omidyar Network India and The Nudge Forum's virtual conference discussed urban governance challenges for vulnerable communities, emphasizing the need for their political representation and institutionalized participation in policymaking",
    image: "https://via.placeholder.com/400",
    link: "/article2",
  },
  {
    title: "Strengthening the first-mile governance",
    date: "Sept 22, 2021",
    description:
      "The Nudge Forum and Omidyar Network's conference discussed the importance of urban governance in India, highlighting that over 50 cities have populations exceeding one million, with urbanization expected to surpass 50% within a decade.",
    image: "https://via.placeholder.com/400",
    link: "/article3",
  },
  {
    title: "Human Trafficking: Crime in Itself",
    date: "Sept 22, 2021",
    description:
      "Thoughts about how human trafficking in India is a severe issue with inadequate justice for victims, including low prosecution and poor rehabilitation efforts.",
    image: "https://via.placeholder.com/400",
    link: "/article4",
  },
  {
    title: "Civic Participation: An Urgent Need",
    date: "Sept 22, 2021",
    description:
      "Article about how India, as one of the largest democracies, faces significant issues of democratic backsliding and a vast gap between its wealthy and marginalized populations due to lack of political representation, awareness of rights, and systemic corruption.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Impacting Lives: Team Everest NGO",
    date: "Sept 22, 2021",
    description:
      "Talking to Karthee Vidya, Founder and CEO of Team Everest NGO who founded the organization in 2006 after witnessing the educational disparities between wealthy and underprivileged children.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Aggression from China will only energise Quad further",
    date: "Sept 22, 2021",
    description:
      "Article about the webinar followed by the historic Quad summit on September 24 which highlighted the Quad's potential to shift focus from security to economic development, with discussions on enhancing cooperation among the four democracies and addressing China's regional aggression, emphasizing the importance of a constructive agenda to improve people's lives.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Taliban taking over Afghanisthan: An Inteview with Shakti Sinha",
    date: "Sept 22, 2021",
    description:
      "Interview with a former UN advisor in Afghanistan discussing his experience working with the Afghan government on governance and development.",
    image: "https://via.placeholder.com/400",
  },
];

const MainContent: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%", padding: 10, backgroundColor: "#fff0f9" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} lg={4} textAlign="left">
            <Typography variant="h4" gutterBottom>
              Hey! I'm Narayani
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              22 y/o content writer who specializes in media research and
              operations for websites and social media
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            display="flex"
            justifyContent="center"
          >
            <CardMedia
              component="img"
              image="https://via.placeholder.com/200"
              alt="Profile picture"
              sx={{ width: 200, height: 200, borderRadius: "50%" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Container sx={{ width: "100%", marginTop: 4 }}>
        <Grid container spacing={4}>
          {articles.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ marginBottom: "30px" }}>
                <CardActionArea
                  component={React.forwardRef<any, any>((props, ref) => (
                    <RouterLink ref={ref} to={item.link} {...props} />
                  ))}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      sx={{ fontSize: "20px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MainContent;
