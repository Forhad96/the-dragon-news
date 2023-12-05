import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import sidebar1 from "@/assets/sidebar1.png";
import sidebar2 from "@/assets/sidebar2.png";
import { showCurrentDate } from "@/utils/getCurrentDate";
const Sidebar = () => {
    const currentDate = showCurrentDate()
    return (
      <Box className="mt-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={sidebar1} width={800} alt="card image" />
            </CardMedia>
            <CardContent>
              <p className="text-white bg-red-600 px-3 py-2 my-2 rounded w-max">
                Technology
              </p>
              <Typography gutterBottom>
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography
                className="my-2"
                variant="body2"
                color="text.secondary"
              >
                By Forhad Hossain - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <Paper key={idx} className="my-5">
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 84 }}>
                  <Image src={sidebar1} width={80} height={80} alt="sidebar" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
        <Image src={sidebar2} width={800} alt="card image" />
      </Box>
    );
};
export default Sidebar;