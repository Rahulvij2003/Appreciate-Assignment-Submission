import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about');
  };

  const goToFaqPage = () => {
    navigate('/faq');
  };

  const goToLoginPage = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '359px', md: '100%' }, // Mobile: 359px, Desktop: full width
        height: { xs: '100%', md: '100vh' }, // Mobile: 704px, Desktop: full height
        left: { xs: '16px', md: '0' }, // Adjust left position for mobile
        top: { xs: '10px', md: '0' }, // Adjust top position for mobile
        background: 'linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%)',
        border: '0.5px solid rgba(210, 231, 255, 0.5)',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        gap: '20px',
      }}
    >
      {/* Header */}
      <Typography variant="h4" component="h1" sx={{ color: '#fff' }}>
        Fruit.AI
      </Typography>
      <Typography variant="subtitle1" component="p" sx={{ color: '#fff', marginBottom: '20px' }}>
        Be Healthy!
      </Typography>

      {/* Buttons Section */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '137px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#FFE5C2',
                filter: 'blur(6px)',
                borderRadius: '20px',
                zIndex: 0, // Behind the text
              }}
            />
            <Button
              fullWidth
              sx={{
                width: { xs: '137px', md: '100%' }, // Mobile width
                height: { xs: '139px', md: '100px' }, // Mobile height
                position: 'relative',
                borderRadius: '20px',
                height: '137px',
                backgroundColor: 'transparent',
                color: '#D734D7',
                fontWeight: 'bold',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1, // Above the blurred background
                '& .MuiTypography-root': {
                  fontFamily: 'Dosis',
                  fontStyle: 'normal',
                  fontWeight: '800',
                  fontSize: '48px',
                  lineHeight: '61px',
                  textTransform: 'none',
                  color: '#C84AD3',
                },
              }}
              onClick={goToFaqPage} // Navigate to FAQ page
            >
              <Typography component="p">
                Chat
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            sx={{
              backgroundColor: '#C2FFD0',
              borderRadius: '20px',
              height: '137px',
              color: '#4D4DFF',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
            onClick={goToLoginPage} // Navigate to Login page
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            sx={{
              backgroundColor: '#EFFFC2',
              borderRadius: '20px',
              height: '137px',
              color: 'transparent', // Empty button
              filter: 'blur(6px)',
            }}
          >
            {/* Empty */}
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            sx={{
              backgroundColor: '#C2F0FF',
              borderRadius: '20px',
              height: '137px',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            <img src="/icon.png" alt="Icon" style={{ width: '40px', height: '40px' }} />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            sx={{
              backgroundColor: '#E0BCF3',
              borderRadius: '20px',
              height: '137px',
              color: '#4D4DFF',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
            onClick={() => navigate('/faq')} // Navigate to FAQ page
          >
            FAQs
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            sx={{
              backgroundColor: '#F0AFFF',
              borderRadius: '20px',
              height: '137px',
              color: '#A123A1',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
            onClick={goToAboutPage}
          >
            About
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
