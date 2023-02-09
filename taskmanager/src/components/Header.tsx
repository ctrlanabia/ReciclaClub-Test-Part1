import { usePage, Page } from '../contexts/Page';
import { Typography, AppBar, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import App from '../App';
import  Theme  from '../Theme';


export const Header: React.FC = () => {

    const { page, setPage } = usePage();

    return (
        <header className="App-header">
            <ThemeProvider theme={Theme}>
            <AppBar color="primary">
            <div className="title">
                <Typography variant='h3' sx={{mt: 1, textAlign: 'center'}}>Task Manager</Typography>
                <Typography variant='h6' sx={{textAlign: 'center'}}>Recicla.Club</Typography>
            </div>

            <div className="navigation">
                <div className="internal" style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="contained" color='secondary' sx={{m: 1}}>Tasks</Button>
                    <Button variant="contained" color='secondary' sx={{m: 1}}>Authors</Button>
                </div>
            </div>
            </AppBar>
            </ThemeProvider>
        </header>
    )
}
