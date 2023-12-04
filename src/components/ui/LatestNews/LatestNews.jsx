import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";

import topNews from "@/assets/top-news.png"
import topNews1 from "@/assets/top-news1.png"
import topNews2 from "@/assets/top-news2.png"
import topNews3 from "@/assets/top-news3.png"
import topNews4 from "@/assets/top-news4.png"
const LatestNews = () => {
    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={topNews} width={800} alt="card image" />
            </CardMedia>
            <CardContent>
              <p className="text-white bg-red-600 px-3 py-2 my-2 rounded w-max">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
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

        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews1} width={800} alt="card image" />
                </CardMedia>
                <CardContent>
                  <p className="text-white bg-red-600 px-3 py-2 my-2 rounded w-max">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography
                    className="my-2"
                    variant="body2"
                    color="text.secondary"
                  >
                    By Forhad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="card image" />
                </CardMedia>
                <CardContent>
                  <p className="text-white bg-red-600 px-3 py-2 my-2 rounded w-max">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography
                    className="my-2"
                    variant="body2"
                    color="text.secondary"
                  >
                    By Forhad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews3} width={800} alt="card image" />
                </CardMedia>
                <CardContent>
                  <p className="text-white bg-red-600 px-3 py-2 my-2 rounded w-max">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography
                    className="my-2"
                    variant="body2"
                    color="text.secondary"
                  >
                    By Forhad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews4} width={800} alt="card image" />
                </CardMedia>
                <CardContent>
                  <p className="text-white bg-red-600 px-3 py-2 my-2 rounded w-max">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography
                    className="my-2"
                    variant="body2"
                    color="text.secondary"
                  >
                    By Forhad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
};
export default LatestNews;