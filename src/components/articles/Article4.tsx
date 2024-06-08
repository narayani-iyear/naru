import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Breadcrumbs,
  Link,
} from "@mui/material";

const Article4: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ maxWidth: "900px" }}
      className="article-container"
    >
      <Paper elevation={3} sx={{ borderRadius: "8px", overflow: "hidden" }}>
        <Box sx={{ padding: 4, backgroundColor: "#FAF3EF" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">
              Human Trafficking: A Crime in itself
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h4"
            gutterBottom
            className="article-title"
            sx={{ fontWeight: "bold" }}
          >
            Human Trafficking: A Crime in itself
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Sept 22, 2021
            </Typography>
            <Typography variant="body2" color="textSecondary">
              By Narayani Iyear
            </Typography>
          </Box>
          <Typography
            variant="body1"
            paragraph
            className="article-content"
            sx={{ lineHeight: 2 }}
          >
            Of all the crimes that seem to affect human beings in this century,
            the hardest to forgive are those where victims of crimes find no
            justice either by way of retribution, reparation, or rehabilitation.
            In other words, as a victim, you have to accept and live with the
            fact that those guilty of the crime will not be prosecuted or
            convicted, you will not be compensated and no one will assist you in
            picking up the pieces to deal with the aftermath of that crime.
            Human trafficking crimes have reached those kinds of proportions
            today where the travesty is not restricted to the enslavement of
            people in various forms of forced labor and sexual exploitation, the
            travesty lies more in the failure of justice delivery by the law
            enforcement, judiciary, and the executive offices. Human trafficking
            is a crime in itself, but it is also the propeller of several other
            crimes.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className="article-content"
            sx={{ lineHeight: 2 }}
          >
            According to the data issued by the National Crime Records Bureau,
            in the year 2016, India reported 8132 cases of trafficking under
            IPC, the total number of victims rescued was 23117 out of which
            10347 were male and 12770 were female. In 2017, India reported 2854
            cases of trafficking, the total number of victims rescued was 5789
            out of which 2287 were male and 3052 were female. In 2018, India
            reported 2465 cases of human trafficking, the total number of
            victims rescued was 5264 out of which 1869 were male and 9935 were
            female. In 2019, India reported 2260 cases of human trafficking
            under IPC, the total number of victims rescued was 6571 out of which
            2513 were male and 4058 were female. In 2020, India reported 1714
            cases of human trafficking, 4709 victims trafficked out of which
            1912 were male and 2717 were female, the total number of victims
            rescued was 4680 out of which 1303 were male and 2777 were female.
            The government did not report what sections of the IPC were included
            in the data, and the government reported the same number of cases
            for West Bengal in 2018 and 2019 because West Bengal did not provide
            new data. The above-mentioned data are only the officially reported
            cases of trafficking which made it to the papers but the numbers
            will go even higher if we dig deep, say the experts from NCRB.
          </Typography>
          <Divider className="article-divider" sx={{ marginY: 2 }} />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
            sx={{ fontWeight: "bold" }}
          >
            Inadequate Efforts Against Trafficking
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className="article-content"
            sx={{ lineHeight: 2 }}
          >
            The government has although modestly increased the anti-trafficking
            law enforcement efforts but while comparing it to the scale of the
            problem the efforts remained inadequate. Overall law enforcement
            efforts across the country, especially against bonded labor,
            remained inadequate compared to the scale of the problem. This
            widespread impunity for trafficking crimes is the consequence of a
            lack of accountability for misconduct, caste-based discrimination,
            and corruption at various levels of government.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className="article-content"
            sx={{ lineHeight: 2 }}
          >
            As reported over the past five years, human traffickers exploit
            domestic and foreign victims in India and exploit victims from India
            abroad. Internal forced labor constitutes India’s largest
            trafficking problem; these traffickers often target people from the
            most economically weaker strata. The increased unemployment and
            economic insecurity due to the pandemic places a substantial burden
            on this vulnerable community. Traffickers manipulate women, men, and
            children from vulnerable strata by promising a fortune and instead
            compel them to accept low-paying jobs, making them work in
            agriculture, brick kilns, rice mills, embroidery and textile
            factories, and stone quarries with poor living conditions. NGOs have
            assessed at least eight million trafficking victims in India, the
            majority of whom are bonded laborers.
          </Typography>
          <Divider className="article-divider" sx={{ marginY: 2 }} />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
            sx={{ fontWeight: "bold" }}
          >
            Exploitation Beyond Borders
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className="article-content"
            sx={{ lineHeight: 2 }}
          >
            The traffickers target Indian women and girls, but also fraudulently
            recruit significant numbers of Nepali and Bangladeshi women and
            girls to India for sex trafficking. Additionally, traffickers
            exploit women and girls from Central Asian, European, and African
            countries in commercial sex, especially in Goa state. Traffickers
            force many Indian migrants who willingly seek employment abroad into
            construction, domestic work, factories, and other low-skilled
            sectors in many regions, especially Gulf countries and Malaysia,
            often following recruitment fraud and exorbitant recruitment fees.
          </Typography>
          <Divider className="article-divider" sx={{ marginY: 2 }} />
          <Typography
            variant="h5"
            gutterBottom
            className="article-section-title"
            sx={{ fontWeight: "bold" }}
          >
            The Need for Justice
          </Typography>
          <Typography
            variant="body1"
            paragraph
            className="article-content"
            sx={{ lineHeight: 2 }}
          >
            There is a strong need for an increase in investigation,
            prosecution, and conviction of all forms of trafficking, including
            bonded labor. Justice is to be served to every victim. The
            government should develop and immediately implement regular
            monitoring mechanisms of shelters which meet official standards of
            care, strengthen existing Anti-Human Trafficking units through
            increased funding and training of staff, and ensure newly created
            AHTUs are fully operational.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Article4;
