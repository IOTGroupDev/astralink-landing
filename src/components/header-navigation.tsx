"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { navigation } from "@/lib/navigation";
import { sourceLink } from "@/lib/content";
import { Arrow } from "./icons";
import { BrandLogo } from "./brand-logo";

export function HeaderNavigation({ feature }: { feature: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const header = useRef<HTMLElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const sectionLinks = useRef(new Map<string, HTMLAnchorElement>());

  const close = () => {
    setMobileOpen(false);
    setActive(null);
  };

  useEffect(() => {
    if (!mobileOpen && !active) return;
    const onOutsidePointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setMobileOpen(false);
        setActive(null);
      }
    };
    document.addEventListener("pointerdown", onOutsidePointer);
    return () => document.removeEventListener("pointerdown", onOutsidePointer);
  }, [mobileOpen, active]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1120px)");
    const onLayoutChange = () => {
      setMobileOpen(false);
      setActive(null);
    };
    desktop.addEventListener("change", onLayoutChange);
    return () => desktop.removeEventListener("change", onLayoutChange);
  }, []);

  return (
    <header
      ref={header}
      className="site-header"
      data-mobile-open={mobileOpen || undefined}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && !mobileOpen) setActive(null);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || (!active && !mobileOpen)) return;
        event.preventDefault();
        if (mobileOpen) menuToggle.current?.focus();
        else if (active) sectionLinks.current.get(active)?.focus();
        close();
      }}
    >
      <a
        href="#home"
        className="wordmark"
        aria-label="AstraLink home"
        onClick={close}
      >
        <BrandLogo />
      </a>
      <nav
        className="primary-nav"
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <ul className="nav-list">
          {navigation.map((section) => (
            <li
              key={section.id}
              className="nav-group"
              data-active={active === section.id || undefined}
            >
              <div className="nav-heading">
                <a
                  className="nav-top-link"
                  href={section.href}
                  aria-expanded={active === section.id}
                  aria-controls={`navigation-${section.id}`}
                  ref={(element) => {
                    if (element) sectionLinks.current.set(section.id, element);
                    else sectionLinks.current.delete(section.id);
                  }}
                  onClick={close}
                  onFocus={() => {
                    if (!mobileOpen) setActive(section.id);
                  }}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse" && !mobileOpen)
                      setActive(section.id);
                  }}
                >
                  {section.label}
                </a>
                <button
                  className="nav-disclosure"
                  type="button"
                  aria-label={`${section.label} links`}
                  aria-expanded={active === section.id}
                  aria-controls={`navigation-${section.id}`}
                  onClick={() =>
                    setActive(active === section.id ? null : section.id)
                  }
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m4 6 4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="nav-panel"
                id={`navigation-${section.id}`}
                hidden={active !== section.id}
              >
                <ul
                  className="nav-links"
                  style={
                    {
                      "--nav-rows": Math.ceil(section.links.length / 2),
                    } as CSSProperties
                  }
                >
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={close}>
                        <span className="nav-link-title">{link.label}</span>
                        <span className="nav-link-description">
                          {link.description}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                {feature}
              </div>
            </li>
          ))}
          <li className="nav-mobile-language">
            <a
              href={sourceLink("/es/")}
              hrefLang="es"
              lang="es"
              onClick={close}
            >
              En español <span>ES</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <a
          className="header-language"
          href={sourceLink("/es/")}
          hrefLang="es"
          lang="es"
          aria-label="En español"
          onClick={close}
        >
          ES
        </a>
        <a href="#early-access" className="header-cta" onClick={close}>
          Join early access <Arrow diagonal />
        </a>
      </div>
      <button
        className="menu-toggle"
        ref={menuToggle}
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        aria-controls="primary-navigation"
        onClick={() => {
          setMobileOpen(!mobileOpen);
          setActive(null);
        }}
      >
        <span className={mobileOpen ? "menu-line open" : "menu-line"} />
        <span className={mobileOpen ? "menu-line open" : "menu-line"} />
      </button>
    </header>
  );
}
