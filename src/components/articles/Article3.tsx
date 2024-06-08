import React from "react";
import { Box, Typography, Container, Paper, Divider } from "@mui/material";
import headerImage from "../../assets/article3-header.png";

const Article3: React.FC = () => {
  return (
    <Container className="article-container">
      <Paper elevation={3} sx={{ borderRadius: "8px", overflow: "hidden" }}>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h3" gutterBottom className="article-title">
            Strengthening the First-Mile Governance
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            About 50 Indian cities have a population of greater than a million
            each, three agglomerations Mumbai, Delhi, and Kolkata have
            populations greater than 10 million each. More than half the
            countries have smaller populations, including well-known countries
            such as Greece, Israel, Portugal, and other Scandinavian ones. The
            percentage of Indians living in urban areas has increased from 17%
            in the 1971 census to double that number today. And India is
            expected to become majority urban in the next ten years and possibly
            sooner.
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            In a modern economy, cities are very important, tending to be
            economic powerhouses. For example, Mumbai accounts for a third of
            India’s tax collection. Cities provide greater freedom and
            opportunities to their residents, making them centers of social,
            political, and cultural activities. Given our national history,
            villages have a disproportionate role in our national imagination,
            which we articulate in statements such as ‘India lives in her
            villages’. However, going forward, the progress of India will become
            intimately tied to the performance of our cities.
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
            “Indian cities, I believe, are not great places to live even for
            their richest citizens, let alone for their less well-off citizens.
            In Mumbai, the poor live in slums and the rich live in small
            apartments with limited access to what would be considered basic
            civic amenities in other parts of the world,” said Mahesh
            Krishamurthy, who was the moderator of a conference held by The
            Nudge Forum in association with the Omidyar Network on the topic of
            strengthening the first-mile governance.
          </Typography>
          <Divider className="article-divider" />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            The Role of Local Governance
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            The role of local governance in India is as crucial as it is
            under-appreciated. Capacity and issues around administrative powers
            have always proved to be a challenge that has restricted our cities
            from achieving their full potential. ULBs across the country lack
            autonomy in city management, and several city-level functions are
            still managed by the state. Lack of devolution of taxation powers
            and poor user charge structures often lead to stressed municipal
            finances. These challenges have led to poor service delivery in
            cities and have created administrative and governance challenges at
            the municipal level. This panel of experts and civil society members
            have deliberated upon such existing gaps and practical ways to
            address this challenge.
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            One of the major challenges in urban local governance is the
            devolution of power. “If you don’t devolve financial functionaries
            and only devolve functions to the municipalities, they will be
            counterproductive and will be a big burden to society,” said Dr. K.
            Rajeshwar Rao, special secretary of NITI Ayog. Addressing what
            municipalities utilize and what they waste, he said, “We need to
            have better administration so that there is better management.
            Administration has the power in itself that it won’t get affected
            with the change in government.”
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Adding to what Dr. Rao said, Member of Parliament Poonam Mahajan
            stated, “Even though there is friction in functioning because of the
            difference in the local and state government party, in a democracy,
            even they are thriving and fighting to make sure that people get
            what they deserve and what they want.”
          </Typography>
          <Divider className="article-divider" />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
          >
            Technological Role in Local Governance
          </Typography>
          <Typography variant="body1" paragraph className="article-content">
            Discussing the technological role and scope of technology in easing
            local level governance, the panelists pointed out that technological
            advancements are definitely needed in governance, but they should be
            devised in such a manner that it is inclusive and accessible.
            “Technology has a huge role in urban planning and urban management,
            it is useful but it needs to involve all stakeholders, otherwise it
            exacerbates inequity,” said Abhishek Singh, CEO of Mygov.in.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Article3;
