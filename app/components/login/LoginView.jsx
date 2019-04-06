import PropTypes from 'prop-types'
import { Button, Form, Alert } from 'react-bootstrap'

const LoginView = (props) => {
  const {
    onChange,
    onSubmit,
    form,
    errorMessage,
    isAuthenticating,
  } = props

  return (
    <div className="form-container">
      <Form className="form-signin p-1" onSubmit={onSubmit}>
        <img className="mb-4" src="http://www.clappingape.com/img/logo.svg" alt="" />

        <Form.Control onChange={onChange} value={form.email || ''} name="email" type="email" placeholder="Email Address" />
        <Form.Control onChange={onChange} value={form.password || ''} name="password" type="password" placeholder="Password" />

        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <Button block size="lg" variant="primary" disabled={isAuthenticating} type="submit">Sign in</Button>

      </Form>
    </div>
  )
}

LoginView.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  form: PropTypes.any,
  errorMessage: PropTypes.string,
  isAuthenticating: PropTypes.bool,
}

export default LoginView
