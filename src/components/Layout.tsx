import * as React from 'react'
import { Link } from 'gatsby'
import { 
  layout, 
  layout_nav,
  nav_container,
  nav_content,
  nav_list,
  nav_item,
  nav_link,
  layout_main,
  page_title,
  content_container,
  layout_footer,
  footer_container,
  footer_content,
  footer_section,
  footer_title,
  footer_list,
  footer_link,
  footer_bottom,
  copyright,
} from './Layout.module.css';

function createNavLink(url: string, name: string): ReactElement {
  return (<li className={nav_item}><Link to={url} className={nav_link}>{name}</Link></li>);
}

function createFootLink(url: string, name: string): ReactElement {
  return (<li><Link to={url} className={footer_link}>{name}</Link></li>);
}

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layout}>
      <nav className={layout_nav}>
        <div className={nav_container}>
          <div className={nav_content}>
            <ul className={nav_list}>
	      {createNavLink("/", "Home")}
	      {createNavLink("/about", "About")}
	      {createNavLink("/contact", "Contact")}
	      {createNavLink("/events", "Events")}
	      {createNavLink("/sponsors", "Sponsors")}
            </ul>
          </div>
        </div>
      </nav>

      <main className={layout_main}>
        <h1 className={page_title}>{pageTitle}</h1>
        <div className={content_container}>
          {children}
        </div>
      </main>

      <div className={layout_footer}>
        <div className={footer_container}>
          <div className={footer_content}>
            <div className={footer_section}>
              <h3 className={footer_title}>Related Projects</h3>
              <ul className={footer_list}>
		{createFootLink("", "Tony")}
              </ul>
            </div>
            <div className={footer_section}>
              <h3 className={footer_title}>Community</h3>
              <ul className={footer_list}>
		{createFootLink("https://discord.com/login", "Discord")}
              </ul>
            </div>
          </div>
          <div className={footer_bottom}>
            <p className={copyright}>© {new Date().getFullYear()} Red Deer Jazz Society. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
