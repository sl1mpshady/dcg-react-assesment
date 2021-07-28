import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#78cfa0",
    "&:hover": {
      backgroundColor: "#78cfa0",
    },
    height: "57px",
    width: "100%",

    textTransform: "none",
  },
}))(Button);

export default ColorButton;
