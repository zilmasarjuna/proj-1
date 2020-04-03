import PropTypes from 'prop-types'
import classNames from 'classnames'

const Alert = (props) => {
  const {
    children,
    className,
  } = props

  const classes = classNames(
    className,
    'alert',
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

export default Alert
