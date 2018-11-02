import {Button, TextField, Paper, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

const form = (props) => {
    const {classes} = props;
    return (
        <Grid item xs>
        <Paper>
    <form className={classes.container} noValidate>
            <TextField className={classes.textField} label="Name" margin="normal" required/>
            <TextField className={classes.textField} label="Email" margin="normal" required/>
            <TextField className={classes.textField} label="Description" helperText="Enter the issue details..." margin="normal" required/>
            <Button />
    </form>
    </Paper>
    </Grid>
)
    }

    form.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default withStyles(styles)(form);