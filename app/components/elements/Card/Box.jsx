import PropTypes from 'prop-types'

const Box = (props) => {
  const {
    children,
  } = props
  return (
    <div className="box">
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.any,
}

export default Box
