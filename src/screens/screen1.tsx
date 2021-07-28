import { OnChangeEvent } from "../types";
import { useStyles } from "../styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "../customElement/button";

const Screen1 = ({
  firstOperand,
  onChange,
  onAddNumber,
}: {
  firstOperand: number;
  onChange: OnChangeEvent;
  onAddNumber: () => any;
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={6}>
        <TextField
          label="Please enter a number"
          fullWidth
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.label,
            },
          }}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.input,
              focused: classes.focused,
            },
          }}
          value={firstOperand}
          onChange={(e) => onChange(0, e)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          variant="contained"
          color="primary"
          disableElevation={true}
          size="large"
          onClick={onAddNumber}
        >
          Add number
        </Button>
      </Grid>
    </>
  );
};

export default Screen1;
