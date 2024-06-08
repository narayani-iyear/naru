import React from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";
import headerImage from "../../assets/article1-header.png"; // Make sure to have a header image in the appropriate path

const Article1: React.FC = () => {
  return (
    <Container className="article-container">
      <Paper elevation={3} sx={{ borderRadius: "8px", overflow: "hidden" }}>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom className="article-title">
            Grassroots media and active citizenship
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            The Nudge Forum conducted a virtual conference on 13th August, 2021
            where panelists Meera Devi (The bureau chief of Khabar Lahariya),
            Dhanya Rajendran (Editor in chief, The News Minute) and Barkha Dutt
            (Mojo Story) focused on the importance of grassroots media.
            Grassroots media has a critical role to play in “pulling” government
            services, and “pushing” citizen participation.
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            How do these media-outlets view their role, and its limitations in
            enhancing citizen participation? How has this role of media changed
            and evolved over the years - driven by the technology
            revolution/social media? What will it take to strengthen grassroots
            media in our country.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginY: 4 }}>
            <img
              src={headerImage}
              alt="Article Header"
              style={{
                width: "50%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            The Role of Journalists
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            In the initial stage of the conference the discussions revolved
            around what is the role of journalists in the society, is it just
            reporting the issue fearlessly and without any bias and letting the
            citizens decide what is better for the society or is it on the
            journalists to bring about a change in the society by playing the
            role of activists. In the discussion about what is a newsworthy
            story and what isn’t, the speakers Dhanya Rajendran and Barkha Dutt
            explained how there is so much pressure on the journalists working
            in giant media organizations to choose a story with regard to the
            audience size, advertising model and generating traffic. Whereas
            speaker Meera Devi shared that working in a small media organization
            is not that easy as they do not have the wide audience base but this
            pressure has never affected the reporting of news. Meera Devi said
            “We at Khabar Lahariya focus on the issues that matter, the issues
            that are unheard and often not given the deserved importance. We try
            to bring out issues in front of the world with a vision.”
          </Typography>
          <Divider className="article-divider" />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            Challenges of Grassroots Media
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Further explaining how the issues that do not have mass interest but
            are needed to be reported are neglected as the tyranny of
            advertising revenue models, tyranny of social media algorithm and
            technological revolution have made it complex to report such news
            because if there isn’t enough audience then the story won’t generate
            revenue. Hence, the news story wouldn’t be covered. Answering to the
            questions asked by the live audience present in the conference the
            panelists said that whether India has an appetite to consume
            thousand local reporters, whether the grassroot media can sustain
            itself or not. All of this depends on the constant support from
            citizens and their active participation. Grassroot media is intended
            to provide a national platform for citizens from rural areas to have
            a voice. As locals become the future some of the initiatives to
            represent the grassroot have been successful and some didn’t work
            oddly enough. “India needs local reporting, the audience is ready
            for it but our revenue models are not. Local and National media
            should have they sync in order to amplify any local issue and make
            it of national importance” said Dhanya Rajendran.
          </Typography>
          <Divider className="article-divider" />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            Fact-Based vs Opinionated News
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Lastly the panelists stressed on how to differentiate between fact
            based and opinionated news as the role of media has changed and
            evolved over the years, the media has become part of our lives and
            has an enormous influence on our society. The importance of media is
            growing every day due to the great connectivity that exists around
            the globe but somehow the line between opinion and facts have been
            blurred with this change. For this reason, it is necessary that each
            one of us becomes aware of the power of the media. This allows us to
            be critical of all the information we receive daily. “Citizens have
            to cultivate the discipline of understanding. There’s no other way
            to help. We as an audience have to understand the shades of the
            complexity of a story and comprehend what fact and opinion is.” Said
            Barkha Dutt.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Article1;
