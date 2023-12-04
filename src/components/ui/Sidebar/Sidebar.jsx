import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import sidebar1 from "@/assets/sidebar1.png";
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
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
              </Grid>

            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
};
export default Sidebar;