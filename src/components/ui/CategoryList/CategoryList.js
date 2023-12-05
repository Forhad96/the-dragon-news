import getAllCategories from "@/utils/getAllCategories";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();
  return (
    <Box>
      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        <Typography>Categories</Typography>
        <Divider />
        {allCategories.map((category) => (
          <Button  variant="outlined" key={category._id}>
            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
export default CategoryList;
