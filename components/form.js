import {Button, TextField, Paper, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '100px'
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
    const {classes, step} = props;
    return (
    <form className={classes.container} noValidate>
    {step === 0 && (
        <>
            <TextField className={classes.textField} label="Name" margin="normal" />
            <TextField className={classes.textField} label="Email" margin="normal"/>
            <TextField className={classes.textField} label="Phone" margin="normal"/>
            </>
    )}
        {step === 1 && (
        <>
            <TextField className={classes.textField} label="Description" margin="normal"/>
            </>
    )}
        {step === 2 && (
        <>
            <TextField className={classes.textField} label="Evidence" margin="normal"/>
            </>
    )}
    </form>
)
    }

    form.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default withStyles(styles)(form);