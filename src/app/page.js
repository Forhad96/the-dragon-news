import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1 className="text-3xl border-b-4 font-medium border-red-600">
            National News
          </h1>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <h1 className="text-3xl border-b-4 font-medium border-red-600">
            Sylhet
          </h1>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
