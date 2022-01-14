import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface INavLink {
  href: string;
  name: string;
}
const Navbar = () => {
  return (
    <Nav>
      <NavLink href="/" name="Home" />
      <NavLink href="/about" name="About" />
      <NavLink href="/table" name="Table" />
      <NavLink href="/newTable" name="New Table" />
    </Nav>
  );
};
const NavLink = ({ href, name }: INavLink) => {
  const { pathname } = useRouter();
  return (
    <Link href={href} passHref>
      {pathname != href ? (
        <LinkItem>{name}</LinkItem>
      ) : (
        <ActiveLinkItem>{name}</ActiveLinkItem>
      )}
    </Link>
  );
};

const Nav = styled.nav``;
const LinkItem = styled.a`
  padding: 1rem;
`;
const ActiveLinkItem = styled(LinkItem)`
  font-weight: bold;
`;

export default Navbar;
