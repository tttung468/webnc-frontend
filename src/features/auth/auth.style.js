import { withStyles } from '@material-ui/core'

function styles(theme) {
  return {
    root: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    card: {
      maxWidth: '400px',
      paddingBottom: theme.spacing(1)
    },
    step: {
      maxWidth: 400,
      flexShrink: 0,
      padding: theme.spacing(0, 4)
    },
    field: {
      margin: theme.spacing(2, 0)
    },
    submit: {
      margin: theme.spacing(4, 0),
      height: 40
    },
    opt_section: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: theme.spacing(4, 2)
    },
    opt: {
      width: 36,
      textAlign: 'center',
      fontSize: theme.typography.h3.fontSize
    },
    opt_input: {
      textAlign: 'center',
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      }
    }
  }
}

export default function StyledComponent(Component) {
  return withStyles(styles)(Component)
}
