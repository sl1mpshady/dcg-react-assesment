import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CustomButton from "../customElement/button";
import Input from "../customElement/input";
import { OnChangeEvent, OnOperatorChange } from "../types";
import { useStyles } from "../styles";

const Screen2 = ({
  firstOperand,
  secondOperand,
  operator,
  answer,
  onOperatorChange,
  onAddOperation,
  onSecondOperandChange,
  onReset,
}: {
  firstOperand: number;
  secondOperand: number;
  operator: String;
  answer: number;
  onOperatorChange: OnOperatorChange;
  onAddOperation: () => any;
  onSecondOperandChange: OnChangeEvent;
  onReset: () => any;
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {[firstOperand, operator, secondOperand].map((text) => (
          <Grid item>
            <div className={classes.container}>{text}</div>
          </Grid>
        ))}
      </Grid>
      {[
        <Typography variant="h2" align="center">
          =
        </Typography>,
        <Typography variant="h2" align="center" className={classes.typography}>
          {answer}
        </Typography>,
      ].map((element) => (
        <Grid item xs={12}>
          {element}
        </Grid>
      ))}

      <Grid item xs={6}>
        <Input
          label="Operator"
          value={operator}
          select={true}
          onChange={onOperatorChange}
        >
          {["+", "-", "*", "/"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Input>
      </Grid>
      <Grid item xs={6}>
        <Input
          label="Operand"
          value={secondOperand}
          onChange={(e) => onSecondOperandChange(1, e)}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          variant="contained"
          color="primary"
          disableElevation={true}
          size="large"
          onClick={onAddOperation}
        >
          Add operation
        </CustomButton>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" fullWidth onClick={onReset}>
          Reset
        </Button>
      </Grid>
    </>
  );
};

export default Screen2;
