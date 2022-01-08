import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import { Button } from "@mui/material";


const useStyles = makeStyles({
  product: {
    marginTop: "50px",
    textAlign: "center",
    marginBottom: "30px"
  },
  tabsProduct: {
    paddingBottom: 25,
    textAlign: "center"
  },
  title: {
    color: "#444444",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  tabsTitle: {
    display: "inline-flex",
    '@media  (max-width: 767px)': {

      display: "inline-block ",
      width: "100%"

    }
  },

  tabs: {
    marginRight: 12,
    '@media  (max-width: 767px)': {
      display: "block",
      margin: "0px 0px 20px 0px",
      width: "100%"

    }
  },
  tabText: {
    textTransform: "capitalize",
    textDecoration: "none",
    color: "#444",
    fontSize: 16,
    padding: "6px 20px",
    border: "solid 1px#e3e3e3",
    WebkitBorderRadius: 32,
    borderRadius: 32,
    cursor: "pointer",
    '@media  (max-width: 750px)': {
      width: "100%",
      display: "block"
    },
    "&:hover": {
      backgroundColor: "rgb(64,198,255)",
      color: "#fff",
      transition: "width 2s"
    },

  }
});

export default function TabSeller() {
  const classes = useStyles();
  const router = useRouter();
  const handleSubmitseller = (value) => {
    //console.log(value);
    router.push(`?cat1=${value}`);
  };
  return (
    <>
      <Box className={classes.product}>
        <Box className={classes.tabsProduct}>
          <Typography className={classes.title}>Best Seller</Typography>
          <Box className={classes.tabsTitle}>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmitseller(`Electronis`)}> All Product </Button>
            </Box>

            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmitseller(`Computer`)}>Computer</Button>
            </Box>

            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmitseller(`SmartPhone`)}>SmartPhone</Button>
            </Box>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmitseller(`Electronis`)}>Electronis</Button>
            </Box>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmitseller(`Jewelry`)}>Jewelry</Button>
            </Box>
            <Box className={classes.tabs}>
              <Button className={classes.tabText} onClick={() => handleSubmitseller(`Sports`)}>Sport</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
