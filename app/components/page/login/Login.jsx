import PropTypes from 'prop-types'
import {
  Card, Input, Button,
} from 'components/elements'
import { Form, Alert } from 'react-bootstrap'

const Login = (props) => {
  const {
    onChange,
    onSubmit,
    form,
    errorMessage,
    isAuthenticating,
  } = props

  return (
    <div className="form-container">

      <div className="form-box">
        <div className="logo-login text-center">
          <img src="/assets/otto_kasir.svg" alt="logo" />
        </div>
        <Card>
          <h3 className="box-title m-b-20 text-center">LOGIN</h3>
          <Form className="form-signin p-1 form-material" onSubmit={onSubmit}>
            <Input onChange={onChange} value={form.email || ''} name="email" type="text" placeholder="Username" label="Username" />
            <Input onChange={onChange} value={form.password || ''} name="password" type="password" placeholder="Password" label="Password" />

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Button
              type="submit"
              disabled={isAuthenticating}
              className="btn-blue f-right"
            >
              {isAuthenticating ? 'Loading...' : 'Submit'}
            </Button>
          </Form>
          <div className="info-text text-center">
            Not a registered user ? Contact admin to register
          </div>
        </Card>
      </div>
    </div>
  )
}

Login.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  form: PropTypes.any,
  errorMessage: PropTypes.string,
  isAuthenticating: PropTypes.bool,
}

export default Login
