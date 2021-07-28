import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    backgroundColor: "transparent !important",
    borderRadius: "4px",
    border: "1px solid #979797",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  focused: {
    backgroundColor: "transparent !important",
  },
  label: {
    color: "#979797 !important",
  },
  header: {
    margin: "70px 0",
  },
  typography: {
    color: "#78cfa0",
    fontWeight: 300,
  },
  container: {
    backgroundColor: "#ecf5f7",
    borderRadius: "4px",
    padding: "30px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "fit-content",
    fontSize: "30px",
  },
});

export { useStyles };
