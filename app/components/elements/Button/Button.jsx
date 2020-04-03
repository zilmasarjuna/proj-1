/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = (props) => {
  const {
    children,
    onClick,
    disabled,
    className,
    typeButton = 'submit',
  } = props

  const classes = classNames(
    className,
    'btn',
  )


  return (
    <div className="col-xs-12">
      <button
        className={classes}
        type={typeButton}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.any,
  typeButton: PropTypes.any,
}

export default Button
