import Link from 'next/link';
import { useRouter } from 'next/router';
import menuList from 'data/menuList';
import ThemeSwitcher from 'components/common/ThemeSwitcher';

const Menu = () => {
  const route = useRouter();
  const { pathname } = useRouter();
  return (
    <>
      {menuList.map(({ name, link }) => {
        return (
          <li
            key={name}
            className={
              route.pathname == link ||
              (pathname.startsWith(link) && link != '/')
                ? 'w-fit text-neutral-900 font-bold dark:text-white
                : ''
            }
          >
            <Link href={link}>
              <a className="hover:text-black dark:hover:text-white">{name}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Menu;
