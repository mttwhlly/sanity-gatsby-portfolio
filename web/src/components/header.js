import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";
import { GithubLogo, DribbbleLogo } from "phosphor-react";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="//000679544.codepen.website/resume.pdf" target="_blank">
              Resumé
            </Link>
          </li>
          <li>
            <Link to="//000679544.codepen.website/resume.pdf" target="_blank">
              <GithubLogo weight="duotone" /> Github
            </Link>
          </li>
          <li>
            <Link to="//000679544.codepen.website/resume.pdf" target="_blank">
              <DribbbleLogo weight="duotone" /> Dribbble
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
