const { createTheme } = require("@mui/material");
/*
createTheme is the internal function of 
material ui depenndencies which we install in our package.
after createing the theme we can export the them 
By using export keyword
*/
export const darkTheme = createTheme(
    {
        palette:{
            mode:"dark",
            primary:{
                main:"#e91e63"
            },
            secondary:{
                main:"#5A20CB"
            },
            black:{
                main:"#242B2E"
            },
            background:{
                main:"#000000",
                default:"#0D0D0D",
                paper:'"#0D0D0D"'
            },
            textColour:{
                main:"#111111"
            }
        }
    }
)