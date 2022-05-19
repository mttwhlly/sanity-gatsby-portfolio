import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { Link } from "gatsby";
import { GitCommit } from "phosphor-react";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
         
          © {new Date().getFullYear()} Matt Whalley &nbsp;-&nbsp; <code><Link to="//github.com/mttwhlly/sanity-gatsby-portfolio" target="_blank">
            view source <GitCommit style={{verticalAlign:"sub"}}/>
          </Link></code>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
