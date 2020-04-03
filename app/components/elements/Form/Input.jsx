import PropTypes from 'prop-types'

const Input = (props) => {
  const {
    value,
    onChange,
    type,
    name,
    placeholder,
    label,
  } = props
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-3">
          <span>{label}</span>
        </div>
        <div className="col-9">
          <input
            className="form-control"
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
}

export default Input
