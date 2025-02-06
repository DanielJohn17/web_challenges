type NavLinkProps = {
  href?: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return <a href={href || '/'}>{children}</a>;
};

export default NavLink;
