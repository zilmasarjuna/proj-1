import PropTypes from 'prop-types'

const Title = ({
  size,
  children,
}) => (
  <h4 style={{ fontSize: size }}>
    {children}
  </h4>
)

Title.propTypes = {
  children: PropTypes.any,
  size: PropTypes.any,
}

export default Title
