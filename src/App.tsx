import { useState, ChangeEvent } from "react";
import { useStyles } from "./styles";
import { OnChangeEvent } from "./types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";

function App() {
  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [secondOperand, setSecondOperand] = useState<number>(0);
  const [operator, setOperator] = useState<String>("+");
  const [answer, setAnswer] = useState<number>(0);
  const [showSecondScreen, setShowSecondScreen] = useState<boolean>(false);
  const classes = useStyles();

  const onChange: OnChangeEvent = (
    index: number,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const re = /[0-9]+/g;
    if (e.target.value === "" || re.test(e.target.value)) {
      index === 0
        ? setFirstOperand(parseInt(e.target.value || "0"))
        : setSecondOperand(parseInt(e.target.value || "0"));
    }
  };

  const onOperatorChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setOperator(event.target.value);

  const onAddNumber = () => {
    setAnswer(firstOperand);
    setShowSecondScreen(true);
  };

  const onAddOperation = () =>
    setAnswer(eval(`${firstOperand} ${operator} ${secondOperand}`));

  const onReset = () => {
    setShowSecondScreen(false);
    setFirstOperand(0);
    setSecondOperand(0);
    setOperator("+");
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} className={classes.header}>
          <Typography
            variant="h3"
            align="center"
            className={classes.typography}
          >
            Expression
          </Typography>
          <Typography
            variant="h3"
            align="center"
            className={classes.typography}
          >
            Evaluator
          </Typography>
        </Grid>
        {!showSecondScreen ? (
          <Screen1
            firstOperand={firstOperand}
            onAddNumber={onAddNumber}
            onChange={onChange}
          />
        ) : (
          <Screen2
            firstOperand={firstOperand}
            secondOperand={secondOperand}
            operator={operator}
            answer={answer}
            onOperatorChange={onOperatorChange}
            onAddOperation={onAddOperation}
            onSecondOperandChange={onChange}
            onReset={onReset}
          />
        )}
      </Grid>
    </Container>
  );
}

export default App;
