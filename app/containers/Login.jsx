const Login = () => (
  <div className="form-container">
    <form className="form-signin p-1">
      <img className="mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />

      <h4>React Starter Kit</h4>

      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
)

export default Login
