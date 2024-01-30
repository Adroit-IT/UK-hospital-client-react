import Dropdown from '@components/atoms/Dropdown';
import IconLaptop from '@components/atoms/Icons/IconLaptop';
import IconLogout from '@components/atoms/Icons/IconLogout';
import IconMenu from '@components/atoms/Icons/IconMenu';
import IconMoon from '@components/atoms/Icons/IconMoon';
import IconSearch from '@components/atoms/Icons/IconSearch';
import IconSun from '@components/atoms/Icons/IconSun';
import IconUser from '@components/atoms/Icons/IconUser';
import IconXCircle from '@components/atoms/Icons/IconXCircle';
import { toggleRTL, toggleSidebar, toggleTheme } from '@configs/themeConfigSlice';
import { IRootState } from '@configs/themeRoot';
import { AuthService } from '@services/AuthService';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HorizontalMenu from './HorizontalMenu';

interface UserData {
  name: string;
  email: string;
  // Add other properties if needed
}

const Header = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove('active');
      }
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add('active');
          });
        }
      }
    }
  }, [location]);

  const handleSignOut = async () => {
    // Display a SweetAlert confirmation dialog
    Swal.fire({
      title: 'Sign Out',
      text: 'Are you sure you want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, sign out!',
    }).then(async (result) => {
      // If the user clicks on the confirm button
      if (result.isConfirmed) {
        try {
          // Retrieve user data from localStorage
          const storedUserData = localStorage.getItem('userData');

          if (storedUserData) {
            const response = await AuthService.logout(); // Pass userId to logout function

            if (response.success) {
              // Clear user data and perform necessary sign-out logic
              localStorage.removeItem('userData');
              setUserData(null);

              // Redirect to the login page
              navigate('/login');
            } else {
              // Handle unsuccessful logout (display error, etc.)
              Swal.fire({
                title: 'Error',
                text: 'Failed to sign out. Please try again.',
                icon: 'error',
              });
            }
          }
        } catch (error) {
          console.error('Error during sign out:', error);
          Swal.fire({
            title: 'Error',
            text: 'An unexpected error occurred. Please try again.',
            icon: 'error',
          });
        }
      }
    });
  };

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(false);

  const setLocale = (flag: string) => {
    setFlag(flag);
    if (flag.toLowerCase() === 'ae') {
      dispatch(toggleRTL('rtl'));
    } else {
      dispatch(toggleRTL('ltr'));
    }
  };
  const [flag, setFlag] = useState(themeConfig.locale);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const generateInitials = (name: any) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    return nameParts
      .map((part: any) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
      <div className="shadow-sm">
        <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
          <div className="flex items-center justify-between horizontal-logo lg:hidden ltr:mr-2 rtl:ml-2">
            <Link to="/dashboard" className="flex items-center main-logo shrink-0">
              <img className="inline w-8 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.svg" alt="logo" />
              <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                {import.meta.env.VITE_APP_NAME}
              </span>
            </Link>
            <button
              type="button"
              className="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <IconMenu className="w-5 h-5" />
            </button>
          </div>

          <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
              <form
                className={`${search && '!block'} sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 sm:block hidden`}
                onSubmit={() => setSearch(false)}
              >
                <div className="relative">
                  <input
                    type="text"
                    className="bg-gray-100 form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 peer sm:bg-transparent placeholder:tracking-widest"
                    placeholder="Search..."
                  />
                  <button type="button" className="absolute inset-0 appearance-none w-9 h-9 ltr:right-auto rtl:left-auto peer-focus:text-primary">
                    <IconSearch className="mx-auto" />
                  </button>
                  <button type="button" className="absolute block -translate-y-1/2 hover:opacity-80 sm:hidden top-1/2 ltr:right-2 rtl:left-2" onClick={() => setSearch(false)}>
                    <IconXCircle />
                  </button>
                </div>
              </form>
              <button
                type="button"
                onClick={() => setSearch(!search)}
                className="p-2 rounded-full search_btn sm:hidden bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
              >
                <IconSearch className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]" />
              </button>
            </div>
            <div>
              {themeConfig.theme === 'light' ? (
                <button
                  className={`${
                    themeConfig.theme === 'light' &&
                    'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('dark'));
                  }}
                >
                  <IconSun />
                </button>
              ) : (
                ''
              )}
              {themeConfig.theme === 'dark' && (
                <button
                  className={`${
                    themeConfig.theme === 'dark' &&
                    'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('system'));
                  }}
                >
                  <IconMoon />
                </button>
              )}
              {themeConfig.theme === 'system' && (
                <button
                  className={`${
                    themeConfig.theme === 'system' &&
                    'flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60'
                  }`}
                  onClick={() => {
                    dispatch(toggleTheme('light'));
                  }}
                >
                  <IconLaptop />
                </button>
              )}
            </div>
            {themeConfig.languageList.length > 1 && (
              <div className="dropdown shrink-0">
                <Dropdown
                  offset={[0, 8]}
                  placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                  btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                  button={<img className="object-cover w-5 h-5 rounded-full" src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="flag" />}
                >
                  <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                    {themeConfig.languageList.map((item: any) => {
                      return (
                        <li key={item.code}>
                          <button
                            type="button"
                            className={`flex w-full hover:text-primary rounded-lg ${i18next.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                            onClick={() => {
                              i18next.changeLanguage(item.code);
                              // setFlag(item.code);
                              setLocale(item.code);
                            }}
                          >
                            <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="object-cover w-5 h-5 rounded-full" />
                            <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </Dropdown>
              </div>
            )}
            {userData && (
              <div className="flex dropdown shrink-0">
                <Dropdown
                  offset={[0, 8]}
                  placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                  btnClassName="relative group block"
                  button={<div className="flex items-center justify-center text-white rounded-full w-9 h-9 bg-primary">{generateInitials(userData.name)}</div>}
                >
                  <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                    <li>
                      <div className="flex items-center px-2 py-4">
                        <div className="flex items-center justify-center text-white rounded-md w-9 h-9 bg-primary">{generateInitials(userData.name)}</div>
                        <div className="truncate ltr:pl-2 rtl:pr-2">
                          <h4 className="text-base">{userData?.name}</h4>
                          <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                            {userData?.email}
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/users/profile" className="dark:hover:text-white">
                        <IconUser className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                        Profile
                      </Link>
                    </li>
                    <li className="border-t cursor-pointer border-white-light dark:border-white-light/10">
                      <a onClick={handleSignOut} className="text-danger !py-3">
                        <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            )}
          </div>
        </div>

        {/* horizontal menu */}
        <HorizontalMenu />
      </div>
    </header>
  );
};

export default Header;
