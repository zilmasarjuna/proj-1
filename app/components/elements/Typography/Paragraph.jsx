import PropTypes from 'prop-types'

const Paragraph = ({
  size,
  opacity,
  color,
  children,
  align,
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

  if (align) {
    styles.align = align
  }

  return (
    <span style={styles}>
      {children}
    </span>
  )
}

Paragraph.propTypes = {
  children: PropTypes.any,
  size: PropTypes.any,
  color: PropTypes.any,
  opacity: PropTypes.any,
  align: PropTypes.any,
}

export default Paragraph
