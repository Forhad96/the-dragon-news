import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerLogo from "@/assets/The Dragon News.svg";
import { showCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = showCurrentDate()
  return (
    <Box className="w-full py-5">
      <Container>
        <Image
          src={headerLogo}
          width={500}
          height={500}
          alt="Header Logo"
          className="mx-auto "
        />
        <Typography className="py-2" textAlign="center" variant="body2" color="gray">
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};
export default Header;
