// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function

import React from "react";
import Typography from "@mui/material/Typography";

const Title = () => {
    return (
        <div className="title">
        <Typography variant='h4' sx={{ color: 'text.secondary', fontWeight: 'medium' }}>QUALIFIED TEAMS</Typography>
        </div>
    )
}

export default Title