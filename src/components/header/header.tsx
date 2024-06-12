'use client';
import './header.css';
import Link from 'next/link';
import { Show } from '@/utils/hooks/show';
import useThemeSwitcher from '@/utils/hooks/theme-switcher';

export default function Header() {
  const { day, toggleTheme } = useThemeSwitcher();
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-sm header_nav">
          <div className="container-fluid container-lg">
            <Link className="fw-bold navbar-brand" href="#">
              Title
            </Link>
            <Show>
              <Show.When isTrue={day}>
                <Link
                  href="#"
                  onClick={toggleTheme}
                  className="ms-auto me-3 fa fa-moon-o header_theme-icon"
                ></Link>
              </Show.When>
              <Show.Else>
                <Link
                  href="#"
                  onClick={toggleTheme}
                  className="ms-auto me-3 fa fa-sun-o header_theme-icon"
                ></Link>
              </Show.Else>
            </Show>
            <button
              type="button"
              aria-expanded="false"
              data-bs-toggle="collapse"
              aria-label="Toggle navigation"
              aria-controls="navbarSupportedContent"
              data-bs-target="#navbarSupportedContent"
              className="p-0 navbar-toggler header_toggle"
            >
              <span className="d-block"></span>
              <span className="d-block"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    role="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    className="py-0 mb-0 me-sm-1 nav-link fs-1 fa fa-github"
                  ></Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  type="search"
                  name="location"
                  aria-label="Search"
                  placeholder="Search"
                  className="form-control me-2"
                />
                <button
                  type="submit"
                  title={day ? 'Night' : 'Day'}
                  className="btn btn-outline-success fa fa-search"
                ></button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
