import React from 'react';
import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
    palette: {
        primary: {
            light: '##70db72',
            main: '#3fc453',
            dark: '#33ab35',
            contrastText: '#fff',

        }
    }
});

// declare module '@mui/material/styles' {
//     interface Theme {
//         status: {
//             danger: string;
//         };
//     }

//     interface ThemeOptions {
//         status?: {
//             danger?: string;
//         };
//     }
// }

export default Theme;
