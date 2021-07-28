import TextField from "@material-ui/core/TextField";
import { useStyles } from "../styles";

const Input = ({
  label,
  value,
  onChange,
  select = false,
  children,
}: {
  label: String;
  value: number | String;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => any;
  select?: boolean;
  children?: any;
}) => {
  const classes = useStyles();
  return (
    <TextField
      select={select}
      label={label}
      fullWidth
      InputLabelProps={{
        shrink: true,
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
      value={value}
      onChange={(e) => onChange(e)}
    >
      {children}
    </TextField>
  );
};

export default Input;
