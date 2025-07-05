import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';

const navLinks = ['Home', 'Categories', 'Articles'];

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navLinks.map((link) => (
            <Box
              key={link}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  height: '2px',
                  width: 0,
                  backgroundColor: 'primary.main',
                  color: 'primary.main',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              <Link
                href="#"
                underline="none"
                color="text.primary"
                sx={{
                  fontWeight: 500,
                  fontSize: '1rem',
                }}
              >
                {link}
              </Link>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
