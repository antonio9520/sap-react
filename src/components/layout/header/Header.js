import React from "react";
import logo from "../../../assets/images/SAPTalent/SAPTalent-Logo-Whitepng.webp";
import avatar from "../../../assets/images/svgs/icon-notification.svg";

const Header = () => {
  return (
    <header className="app-header header bg-azul">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="header-brand logo" href="index.html">
            <img
              alt="logo"
              className="header-brand-img main-logo "
              src={logo}
            />
          </a>

          <a
            aria-label="Hide Sidebar"
            className="app-sidebar__toggle"
            data-toggle="sidebar"
            href="#"
          ></a>
          <div className="d-flex order-lg-2 ml-auto">
            <div className="dropdown d-sm-flex d-none header-message">
              <a className="nav-link icon" data-toggle="dropdown">
                <i className="fe fe-mail"></i>
                <span className=" nav-unread badge badge-danger badge-pill">
                  4
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a className="dropdown-item text-center" href="#">
                  2 New Messages
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item d-flex pb-3" href="#">
                  <span
                    className="avatar avatar-md brround mr-3 align-self-center cover-image"
                    data-image-src="../assets/images/users/7.jpg"
                  ></span>
                  <div>
                    <strong>Madeleine</strong> Hey! there I' am available....
                    <div className="small text-muted">3 hours ago</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex pb-3" href="#">
                  <span
                    className="avatar avatar-md brround mr-3 align-self-center cover-image"
                    data-image-src="../assets/images/users/3.jpg"
                  ></span>
                  <div>
                    <strong>Anthony</strong> New product Launching...
                    <div class="small text-muted">5 hour ago</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex pb-3" href="#">
                  <span
                    className="avatar avatar-md brround mr-3 align-self-center cover-image"
                    data-image-src="../assets/images/users/8.jpg"
                  ></span>
                  <div>
                    <strong>Olivia</strong> New Schedule Realease......
                    <div className="small text-muted">45 mintues ago</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex pb-3" href="#">
                  <span
                    className="avatar avatar-md brround mr-3 align-self-center cover-image"
                    data-image-src="../assets/images/users/9.jpg"
                  ></span>
                  <div>
                    <strong>Sanderson</strong> New Schedule Realease......
                    <div class="small text-muted">2 days ago</div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <div class="text-center dropdown-btn pb-3">
                  <div class="btn-list">
                    <a href="#" class="btn btn-primary btn-sm">
                      <i class="fe fe-plus mr-1"></i>Add New
                    </a>
                    <a href="#" class=" btn btn-secondary btn-sm">
                      <i class="fe fe-eye mr-1"></i>View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown d-sm-flex d-none header-message">
              <a class="nav-link icon" data-toggle="dropdown">
                <i class="fe fe-bell"></i>
                <span class=" nav-unread badge badge-warning  badge-pill">
                  3
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a class="dropdown-item text-center" href="#">
                  Notifications
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item d-flex pb-4" href="#">
                  <span class="brround mr-3 align-self-center avatar-md bg1">
                    <img src={avatar} />
                  </span>
                  <div>
                    <span class="font-weight-bold">
                      {" "}
                      commented on your post{" "}
                    </span>
                    <div class="small text-muted d-flex">
                      3 hours ago
                      <div class="ml-auto">
                        <span class="badge badge-primary">New</span>
                      </div>
                    </div>
                    <div class="progress progress-xs mt-1">
                      <div class="progress-bar bg-primary w-30"></div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item d-flex pb-4" href="#">
                  <span class="avatar-md brround mr-3 align-self-center cover-image bg2">
                    {" "}
                    <img src="../assets/images/svgs/icon-notification.svg" />
                  </span>
                  <div>
                    <span class="font-weight-bold">
                      {" "}
                      New file has been Uploaded{" "}
                    </span>
                    <div class="small text-muted d-flex">
                      5 hour ago
                      <div class="ml-auto">
                        <span class="badge badge-secondary">New</span>
                      </div>
                    </div>
                    <div class="progress progress-xs mt-1">
                      <div class="progress-bar bg-secondary w-50"></div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item d-flex pb-4" href="#">
                  <span class=" avatar-md brround mr-3 align-self-center cover-image bg3">
                    {" "}
                    <img src="../assets/images/svgs/icon-notification.svg" />
                  </span>
                  <div>
                    <span class="font-weight-bold">
                      {" "}
                      User account has Updated
                    </span>
                    <div class="small text-muted d-flex">
                      5 hour ago
                      <div class="ml-auto">
                        <span class="badge badge-warning">New</span>
                      </div>
                    </div>
                    <div class="progress progress-xs mt-1">
                      <div class="progress-bar bg-warning w-70"></div>
                    </div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <div class="text-center dropdown-btn pb-3">
                  <div class="btn-list">
                    <a href="#" class="btn btn-primary btn-sm">
                      <i class="fe fe-plus mr-1"></i>Add New
                    </a>
                    <a href="#" class=" btn btn-secondary btn-sm">
                      <i class="fe fe-eye mr-1"></i>View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="navbar-toggler navresponsive-toggler d-sm-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon fe fe-more-vertical text-white"></span>
            </button>

            <div class="dropdown">
              <a
                class="nav-link pr-0 leading-none d-flex"
                data-toggle="dropdown"
                href="#"
              >
                <span
                  class="avatar avatar-md brround cover-image"
                  data-image-src="../assets/images/SAPTalent/icon-new-user.svg"
                ></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <div class="drop-heading">
                  <div class="text-center">
                    <h5 class="text-dark mb-1">Vanessa Dyer</h5>
                    <small class="text-muted">Web Developer</small>
                  </div>
                </div>
                <div class="dropdown-divider m-0"></div>
                <a class="dropdown-item" href="#">
                  <i className="dropdown-icon fe fe-user"></i>Perfil
                </a>

                <a class="dropdown-item" href="#">
                  <i class="dropdown-icon fe fe-mail"></i>Mensajes
                </a>

                <a class="dropdown-item" href="#">
                  <i class="dropdown-icon fe fe-power"></i> Cerrar sesion
                </a>
                <div class="dropdown-divider"></div>
                <div class="text-center dropdown-btn pb-3">
                  <div class="btn-list">
                    <a href="#" class="btn btn-icon btn-facebook btn-sm">
                      <i class="si si-social-facebook"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-twitter btn-sm">
                      <i class="si si-social-twitter"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-instagram btn-sm">
                      <i class="si si-social-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown d-md-flex header-settings">
              <a
                href="#"
                class="nav-link icon"
                data-toggle="sidebar-right"
                data-target=".sidebar-right"
              >
                <i class="fe fe-align-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
