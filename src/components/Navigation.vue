<template>
  <nav class="navbar navbar-expand-lg p-0">
    <div class="container-fluid p-0">
      <div class="col">
        <div class="sub-header">
          <ul class="nav">
            <li class="nav-item social-icons">
              <i class="bi bi-twitter"></i>
            </li>
            <li class="nav-item social-icons">
              <i class="bi bi-envelope"></i>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                STUDENTS
              </a>
              <ul
                class="dropdown-menu bg-pink"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">PROSPECTUS</a></li>
                <li><a class="dropdown-item" href="#">Uniform</a></li>
                <li><a class="dropdown-item" href="#">School Day</a></li>
                <li>
                  <a class="dropdown-item" href="#">Careers info</a>
                </li>
                <li><a class="dropdown-item" href="#">School Clubs</a></li>
                <li><a class="dropdown-item" href="#">Exam information</a></li>
                <li><a class="dropdown-item" href="#">Calendar</a></li>
                <li><a class="dropdown-item" href="#">6th Form</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PARENTS
              </a>
              <ul
                class="dropdown-menu bg-pink"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">SATs/Performance Tables</a>
                </li>
                <li><a class="dropdown-item" href="#">SEND</a></li>
                <li><a class="dropdown-item" href="#">Uniform</a></li>
                <li>
                  <a class="dropdown-item" href="#">Admissions</a>
                </li>
                <li><a class="dropdown-item" href="#">School Clubs</a></li>
                <li><a class="dropdown-item" href="#">Term Dates </a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >GOVERNANCE</a
              >
            </li>
            <form class="d-flex" role="search">
              <div class="d-flex search-wrapper">
                <input
                  class="form-control me-2 search"
                  type="search"
                  placeholder="SEARCH"
                  aria-label="Search"
                />

                <span class="search-icon">
                  <i class="bi bi-search"></i>
                </span>
              </div>
            </form>
          </ul>
        </div>

        <div class="mobile-header d-flex">
          <a class="navbar-brand" href="#">Rosbeth</a>
          <button
            class="btn btn-outline-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <!-- <span class="navbar-toggler-icon"></span> -->
            <i class="bi bi-list"></i>
          </button>

          <div
            class="offcanvas offcanvas-start mobile-bg"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i class="bi bi-x-lg white-bg"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <div class="nav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/"
                      >Home Learning</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/login"
                      >About Us</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/signup"
                      >Classes</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/"
                      >News & Events</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">6th Form</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/"
                      >Contact Us</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- <div class="nav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home Learning</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">About Us</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/signup">Classes</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">News & Events</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">6th Form</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Contact Us</router-link>
              </li>
            </ul>
          </div> -->
        </div>
        <div class="header d-flex">
          <a class="navbar-brand" href="#">Rosbeth</a>

          <div class="nav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home Learning</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">About Us</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/signup">Classes</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">News & Events</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">6th Form</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">Contact Us</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style>
.sub-header {
  background: #bc2a87;
  height: 30px;
  align-items: center;
  font-weight: 600;
  font-style: normal;
  font-size: 0.6rem;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #fff;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: end;
  display: flex;
}
.dropdown-toggle::after {
  display: none;
}
.sub-header a {
  text-decoration: none;
  color: #fff;
}
.sub-header form {
  height: 30px;
  width: 15em;
}
.search-wrapper {
  background: #c23f93;
  border: none;
  /* height: 20px; */
  border-radius: 0;
}
.search {
  background: #c23f93;
  border: none;
  /* height: 20px; */
  border-radius: 0;
}
.search-icon {
  align-items: center;
  display: flex;
  padding-right: 10px;
}
.bg-pink {
  background: #bc2a87;
  font-weight: 600;
  font-style: normal;
  font-size: 0.8rem;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}
.header {
  background: #070954;
  color: #fff;
  padding-left: 200px;
  padding-right: 100px;
  font-style: normal;
  font-size: 1em;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}
.mobile-header {
  display: none !important;
}
.header a {
  text-decoration: none;
  color: #fff;
}
.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #de97c4;
  opacity: 1;
  font-weight: 600;
  font-style: normal;
  font-size: 0.8rem;
  letter-spacing: 0.01em;
  text-transform: uppercase; /* Firefox */
}
.social-icons {
  margin-right: 20px;
  align-items: center;
  display: flex;
}

@media screen and (max-width: 480px) {
  .sub-header {
    display: none;
  }
  .mobile-header {
    background: #070954;
    color: #fff;
    padding-left: 40px;
    padding-right: 40px;
    font-style: normal;
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 600;
    text-transform: uppercase;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    display: flex !important;
  }
  .mobile-header a {
    text-decoration: none;
    color: #fff;
  }
  .modal-backdrop.show {
    opacity: 0;
  }
  .white-bg {
    color: #fff !important;
  }
  .mobile-bg {
    background: #070954 !important;
  }
  .header {
    display: none !important;
  }
}
</style>
