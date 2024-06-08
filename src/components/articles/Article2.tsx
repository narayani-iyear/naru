import React from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";
import headerImage from "../../assets/article2-header.png";

const Article2: React.FC = () => {
  return (
    <Container className="article-container">
      <Paper elevation={3} sx={{ borderRadius: "8px", overflow: "hidden" }}>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom className="article-title">
            Empowering Voices on Ground
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            The Omidyar Network India in collaboration with The Nudge Forum
            conducted a virtual conference where the panelists Rajesh
            Kasturirangan (CEO & Co-founder, Socratus), Divya Varma (Programme
            Manager, Centre for Migration and Labor Solutions, Aajeevika
            Bureau), Rwitwika Bhattacharya (CEO, Swaniti Initiative) and
            Tikender Singh Panwar (National Convenor, NCU) discussed some of the
            long-standing issues with urban governance that especially affect
            the vulnerable classes, the impact of lack of representation and
            voices from marginalized communities in policy making and ways in
            which the participation should be institutionalised.
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            In this pandemic the marginalized communities faced innumerable
            struggles, for example the migrant crisis. “Issues of the migrant
            workers are on the periphery of our society as well as urban
            policy,” said Divya Varma. To explain why we need to empower the
            voices of the marginalized, the panel divided the cities into two
            categories: one is the planned and regulated cities where people
            have access to secure jobs, secure income, better facilities such as
            healthcare, education, etc. These people are accounted for and
            provided services by the government.
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
          <Typography variant="body1" paragraph className="article-content">
            On the other hand, there are unplanned and unregulated cities where
            people have no home, no proper income, no job security, poor access
            to basic amenities, lack of power to resist or appeal in case of
            violence, and constant fear of eviction. The first step to bridge
            this gap is to ensure that the marginalized should have a voice.
            Tikender Singh Panwar shared his anecdotal experience from the time
            when he was the former Mayor of Shimla city, illustrating how basic
            utilities like water could get privatized if there’s no
            participation or resistance from the citizens.
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            The panel emphasized that we might go on talking about inclusivity
            but unless the migrants, the Dalits, women, or whoever we want to
            define as marginalized have political access and are politically
            represented, no change will happen and the inequity will continue to
            get ignored by the political class. The political intermediaries
            still continue to think of framing policies from their privileged
            perspectives instead of framing it from the perspective of the
            vulnerable class.
          </Typography>
          <Divider className="article-divider" />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            Recognizing the Marginalized
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Discussing how to get the vulnerable communities recognized as a
            vote bank, Rwitwika said, “When it comes to recognizing the
            marginalized communities, the kind of simple answer to this very
            complex system is mobilizing and organizing as one united voice in
            terms of having public service representatives.”
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Talking about who is the most important intermediary in local
            governance, the panel said, “Apart from thinking who’s the most
            important intermediary it is important to think that who is the most
            efficient intermediary? It is the bureaucracy, the machinery that
            plays a critical role in service delivery to the public. A lot of
            execution falls on the bureau.”
          </Typography>
          <Divider className="article-divider" />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            Inclusivity Toolkit
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Answering the question about an inclusivity toolkit that governments
            and policymakers can follow for a mindful approach to policy
            framework, Rajesh Kasturirangan said, “Will of ignorance: often when
            you design policies, you should engineer them in such a way that you
            don’t know what you’re going to be when the policy is enacted.”
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            When we think of the issues that the marginalized face, one thing
            that always ends up being right on top is the entitlement and access
            to social sector schemes. At the end of the discussion, we learned
            that the implementation solution emerges not just from designing
            interventions but also from simplifying administrative procedures as
            much as possible.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Article2;
