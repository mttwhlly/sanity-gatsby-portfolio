import { Link } from "gatsby";
import React from "react";
import Logo from "./logo";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import { GithubLogo, DribbbleLogo, LinkedinLogo, Scroll } from "phosphor-react";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/"><Logo /> {siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="//assets.codepen.io/216313/resume_20220423.pdf" target="_blank">
            Resumé
            </Link>
          </li>
          <li>
            <Link to="//linkedin.com/in/mttwhlly" target="_blank">
              <LinkedinLogo size="20" weight="duotone" style={{verticalAlign:"sub"}}/>
            </Link>
          </li>
          <li>
            <Link to="//github.com/mttwhlly" target="_blank">
              <GithubLogo size="20" weight="duotone" style={{verticalAlign:"sub"}}/>
            </Link>
          </li>
          <li>
            <Link to="//dribbble.com/mttwhlly" target="_blank">
              <DribbbleLogo size="20" weight="duotone" style={{verticalAlign:"sub"}}/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
