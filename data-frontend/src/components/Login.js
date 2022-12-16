// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Login() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-lg-5 col-xl-10 mx-auto">
        <div class="card card_register flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
          </div>
          <div class="card-body p-4 p-sm-5">
            <h2 class="card-title text-center mb-2 fw-bold fs-7">Login</h2>
            <br/>
            <form method='POST'>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">LOGIN</button>
              </div>

              <a class="d-block text-center mt-2 small" href="/register">Don't have an account?</a>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;


