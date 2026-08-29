import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { navigationItems } from "../data/portfolio";
import styles from "./Navigation.module.css";

const NAVIGATION_ID = "primary-navigation";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setIsOpen(false);
  };

  const handleLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Escape") {
      close();
      menuButtonRef.current?.focus();
    }
  };

  return (
    <>
      <button
        ref={menuButtonRef}
        className={styles.menuButton}
        type="button"
        aria-controls={NAVIGATION_ID}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Close" : "Open"} navigation menu`}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        <svg
          className={styles.menuIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d={isOpen ? "M6 6l12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
        <span>Menu</span>
      </button>
      <nav
        id={NAVIGATION_ID}
        className={styles.navigation}
        data-open={isOpen ? "" : undefined}
        aria-label="Primary"
      >
        <ul className={styles.list}>
          {navigationItems.map(({ href, label }) => (
            <li key={href}>
              <a
                className={styles.link}
                href={href}
                onClick={close}
                onKeyDown={handleLinkKeyDown}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
