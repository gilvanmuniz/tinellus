import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButton2: {
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(4),
    backgroundColor: "#ff6600",
    padding: 4,
    fontWeight: 900,
    color: theme.palette.secondary,
  },
  title: {
    flexGrow: 1,
  },
  linkButton: {
    color: "#ff6600",
    marginRight:theme.spacing(2)
  },
}));

const Menu = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#323131",
      },
      secondary: {
        main: "#ff6600",
        dark: "#ff0606",
      },
      neutral: {
        main: "#5c6ac4",
      },
    },
  });
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Home",
          "Sites e Apps",
          "Landpages",
          "Marketing Digital",
          "Edição Vídeos",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <Link href="/">
                   <MenuItem> <Icon className={classes.linkButton}>home</Icon>{text}</MenuItem>
                </Link>
              ) : index === 1 ? (
                <Link href="/sites">
                  <MenuItem><Icon className={classes.linkButton}>language</Icon>{text}</MenuItem>
                </Link>
              ) : index === 2 ? (
                <Link href="/landpages">
                  <MenuItem><Icon className={classes.linkButton} >store</Icon>{text}</MenuItem>
                </Link>
              ) : index === 3 ? (
                <Link href="/marketing">
                  <MenuItem><Icon className={classes.linkButton} >supervisor_account</Icon>{text}</MenuItem>
                </Link>
              ) : index === 4 ? (
                <Link href="/edicao">
                  <MenuItem><Icon className={classes.linkButton} >live_tv</Icon>{text}</MenuItem>
                </Link>
              ): " " }
            </ListItemIcon>
           
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment color="secondary" key={anchor}>
            <Drawer
              color="secondary"
              anchor="left"
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
              <CloseIcon
                className={classes.menuButton2}
                onClick={toggleDrawer(anchor, false)}
              />
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default Menu;
