import {Button, TextField} from '@material-ui/core';

const form = () => (
    <form>
        <TextField label="Name" required/>
            <TextField Label="Email" required/>
            <TextField name="Description" placeholder="Enter the issue details..." required/>
            <Button />
    </form>
)

export default form