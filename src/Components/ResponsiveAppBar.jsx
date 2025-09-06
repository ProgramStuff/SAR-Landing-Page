import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { extendTheme, ThemeProvider } from '@mui/material';

const pages = ['Login'];

export default function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        setAnchorElNav(null);
    };

    const lightDarkTheme = extendTheme({
        colorSchemes: { light: true, dark: false },
        colorSchemeSelector: 'class',
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 600,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <ThemeProvider theme={lightDarkTheme}>
                <AppBar color="white" sx={{ width: '100%' }} position="static">
                    <Container maxWidth="xl" sx={{ ml: 0, width: '100%' }}>
                        <Toolbar sx={{ width: '100%' }} disableGutters>
                            <Link href="/">
                                <Box
                                    component="img"
                                    src="src\app\Branding\icon.png"
                                    sx={{
                                        width: '3vw',
                                        display: { xs: 'none', md: 'flex' },
                                    }}
                                />
                            </Link>
                            <Link href="/">
                                <Box
                                    component="img"
                                    src="src\app\Branding\profileThin.png"
                                    sx={{
                                        width: '10vw',
                                        display: { xs: 'none', md: 'flex' },
                                    }}
                                />
                            </Link>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'flex', md: 'none' },
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                                                            <MenuItem
                                            sx={{ color: '#037AFF' }}
                                            key={'Login'}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Button
                                                href={`http://localhost:5174/Login`}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: '#037AFF',
                                                    display: 'block',
                                                }}
                                            >
                                                <Typography
                                                    sx={{ textAlign: 'center' }}
                                                >
                                                    {'Login'}
                                                </Typography>
                                            </Button>
                                        </MenuItem>

                                    {/* {pages.map((page) => (
                                        <MenuItem
                                            sx={{ color: '#037AFF' }}
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Button
                                                href={`/${page}`}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: '#037AFF',
                                                    display: 'block',
                                                }}
                                            >
                                                <Typography
                                                    sx={{ textAlign: 'center' }}
                                                >
                                                    {page}
                                                </Typography>
                                            </Button>
                                        </MenuItem>
                                    ))} */}
                                </Menu>
                            </Box>

                            <Link href="/">
                                <Box
                                    component="img"
                                    src="src\app\Branding\icon.png"
                                    sx={{
                                        width: '8vw',
                                        display: { md: 'none' },
                                    }}
                                />
                            </Link>
                            <Link href="/">
                                <Box
                                    component="img"
                                    src="src\app\Branding\profileThin.png"
                                    sx={{
                                        width: '32vw',
                                        display: { md: 'none' },
                                    }}
                                />
                            </Link>
                            <Box
                                sx={{
                                    textDecoration: 'none',
                                    flexGrow: 1,
                                    display: {
                                        xs: 'none',
                                        md: 'flex',
                                        lg: 'flex',
                                    },
                                    justifyContent: 'flex-end',
                                }}
                            >

                                    <Button
                                        key={'Login'}
                                        href={`http://localhost:5174/Login`}
                                        onClick={handleCloseNavMenu}
                                        variant={'contained'}
                                        sx={{
                                            textDecoration: 'none',
                                            my: 2,
                                            width: '8vw',
                                            mr: '4vw',
                                            display: 'block',
                                            color: 'white',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {'Login'}
                                    </Button>
                                {/* {pages.map((page) => (
                                    <Button
                                        key={page}
                                        href={`/${page}`}
                                        onClick={handleCloseNavMenu}
                                        variant={page == 'Login' && 'contained'}
                                        sx={{
                                            textDecoration: 'none',
                                            my: 2,
                                            width: page == 'Login' && '8vw',
                                            mr: page == 'Login' ? '4vw' : '2vw',
                                            display: 'block',
                                            color: page == 'Login' && 'white',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))} */}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Outlet context={{}} />
        </ThemeProvider>
    );
}
