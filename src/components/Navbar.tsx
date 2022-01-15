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
      <NavLink href="/" name="Slate Editor" />
      <NavLink href="/tiptap" name="TipTap Editor" />
      <NavLink href="/about" name="About" />
      <NavLink href="/newTable" name="Table" />
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

const Nav = styled.nav`
  padding: 1rem;
`;
const LinkItem = styled.a`
  padding: 1rem;
`;
const ActiveLinkItem = styled(LinkItem)`
  font-weight: bold;
`;

export default Navbar;
