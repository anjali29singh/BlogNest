
import { Box } from "@mui/material";
const Logo = () => {
  return (
    <Box
      sx={{
        fontSize: "1rem",
        fontWeight: 800,
        background: "linear-gradient(45deg, #667eea, #764ba2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      <h1>BlogNest</h1>
    </Box>
  );
};

export default Logo;
