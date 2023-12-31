import { useState } from 'react'
import '../PrimaryNav/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Flipkart</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2 search col-lg-8" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"> <i class="bi bi-box-arrow-in-left">Sign In</i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-cart-check">Cart</i></a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default App
