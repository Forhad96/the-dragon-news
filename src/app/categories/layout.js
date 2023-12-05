import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CategoryList></CategoryList>
          </Grid>
          <Grid item xs={9}>
            <h1 className="text-xl border-b-4 font-medium border-red-600">
              News
            </h1>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default CategoriesLayout;
