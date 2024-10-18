import { FC, JSX } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';


interface AddBlogI {
    open: boolean;
    handleClose: () => void;
}

type FormValues = {
    title: string;
    description: string;
    url: string;
    created_at?: Date;
    viewCount?: number;
}

const defaultValues = {
    title: "",
    description: "",
    url: ""
}


const AddBlog: FC<AddBlogI> = ({ open, handleClose }): JSX.Element => {

    const { register, handleSubmit, reset } = useForm({defaultValues})

    const onSubmit: SubmitHandler<FormValues> = (formdata: FormValues) => {
        console.log(formdata);
        reset();
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth='md'
            fullWidth
            disableEscapeKeyDown={true}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle id="scroll-dialog-title">Create New Blog</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        component='div'
                        id="scroll-dialog-description"
                        sx={{ pt: 1 }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField {...register("title")} id="outlined-basic" label="Title" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField {...register("description")} id="outlined-basic" label="Description" multiline variant="outlined" fullWidth rows={7} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField {...register("url")} id="outlined-basic" label="Image URL" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ mb: 2, mt: 0 }}>
                    <Button type='reset' onClick={() => {
                        reset();
                        handleClose();
                    }}>Cancel</Button>
                    <Button variant='contained' type='submit'>Submit</Button>
                </DialogActions>
            </form>
        </Dialog >

    );
}

export default AddBlog