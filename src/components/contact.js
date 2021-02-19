import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import TextField from "@material-ui/core/TextField"
import Slide from "@material-ui/core/Slide"
import { withFormik } from "formik"
import { LoadingIcon } from "../icons"

const ContactFormTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useFormStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  btnReset: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  btnSubmit: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

const ContactForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props

  const classes = useFormStyles()

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="name"
        label="Your name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        variant="filled"
        fullWidth
      />
      <TextField
        id="email"
        label="Your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        variant="filled"
        fullWidth
      />
      <TextField
        id="subject"
        label="Subject"
        type="text"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        variant="filled"
        fullWidth
      />
      <TextField
        id="message"
        label="Your message"
        rows={5}
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        variant="filled"
        fullWidth
        multiline
      />

      <Button
        size="large"
        variant="contained"
        onClick={handleReset}
        className={classes.btnReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </Button>
      <Button
        size="large"
        variant="contained"
        className={classes.btnSubmit}
        type="submit"
        disabled={isSubmitting}
        color="primary"
      >
        Submit {isSubmitting && <LoadingIcon />}
      </Button>
    </form>
  )
}

const ContactFormWrapper = withFormik({
  mapPropsToValues: () => ({ email: "", name: "", subject: "", message: "" }),

  handleSubmit: (values, { setSubmitting }) => {
    var success = true
    var url = "https://sendgrid-mailer-api.herokuapp.com/contact"
    var formData = new FormData()
    formData.append("name", values.name)
    formData.append("email", values.email)
    formData.append("subject", values.subject)
    formData.append("message", values.message)
    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        origin: "https://sdabhi23.github.io",
        "x-origin-token": process.env.REACT_APP_ORIGIN_TOKEN,
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Something went wrong")
        }
      })
      .catch(error => {
        alert(
          "There's some error submitting the form. Please try again after some time!"
        )
        console.error("Error:", error)
        setSubmitting(false)
        success = false
      })
      .then(response => {
        if (success) {
          alert(
            "Hey, I just received your email, and will surely get back to you as soon as possible!"
          )
          console.log("Success:", response)
          setSubmitting(false)
        }
      })
  },
})(ContactForm)

export default function ContactModal() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        style={{ marginTop: "1em" }}
        onClick={handleOpen}
      >
        Contact Me!
      </Button>
      <Dialog
        fullScreen={fullScreen}
        TransitionComponent={ContactFormTransition}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle id="dialog-title">
          {"Please fill out this form!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To protect my privacy, I try to avoid putting my email address in
            public domain. Submitting this form will send me an email through
            secure channels{" "}
            <span role="img" aria-label="lock and key">
              🔐
            </span>{" "}
            with all the content that you fill in here!{" "}
            <span role="img" aria-label="smiling face">
              😄
            </span>
          </DialogContentText>
          <ContactFormWrapper />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="large"
            onClick={handleClose}
            color="secondary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
