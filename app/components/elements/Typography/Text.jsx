import PropTypes from 'prop-types'

const Text = ({
  size,
  opacity,
  color,
  children,
}) => {
  let styles

  if (color) {
    styles.color = color
  }

  if (opacity) {
    styles.opacity = opacity
  }

  if (size) {
    styles.size = size
  }

  return (
    <span style={styles}>
      {children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  size: PropTypes.any,
  color: PropTypes.any,
  opacity: PropTypes.any,
}

export default Text
