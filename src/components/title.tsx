import { FC, JSX } from 'react'
import { Button, Grid, Typography } from "@mui/material"

interface TitleI {
    title: string;
    btn: {
        name: string;
        onClick: () => void;
    }
}

const Title: FC<TitleI> = ({title, btn}): JSX.Element => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant="h5" component='h1'>{title}</Typography>
            </Grid>
            <Grid item xs={4} justifyContent='flex-end' alignItems='flex-end' alignContent='flex-end' display='flex'>
                <Button variant="contained" onClick={() => btn.onClick()}>{btn.name}</Button>
            </Grid>
        </Grid>
    )
}

export default Title