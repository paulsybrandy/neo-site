import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';
import React from 'react';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          name="The Home of Paul Sybrandy"
          style={{ width: '2.501em', height: '2.876em' }} // Ensure correct size
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog Posts</NavMenuItem>
        <NavMenuItem href="https://paulsybrandy.com/linkinbio" target="_blank">
          Link-in-Bio
        </NavMenuItem>
        <NavMenuItem href="https://paulsybrandy.com" target="_blank">
          NeoHome
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
