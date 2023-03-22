import React from 'react'
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    app: {
        background: "violet",
        color: "red"
    }
})
const Create = () => {
    const classes = useStyles();
  return (
    <div className={classes.app}>Create</div>
  )
}

export default Create