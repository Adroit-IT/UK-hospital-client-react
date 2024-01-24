import Dropdown from '@components/atoms/Dropdown';
import IconBellBing from '@components/atoms/Icons/IconBellBing';
import IconInfoCircle from '@components/atoms/Icons/IconInfoCircle';
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
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import HorizontalMenu from './HorizontalMenu';

const Header = () => {
  const location = useLocation();
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

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      profile: 'user-profile.jpeg',
      message: '<strong className="mr-1 text-sm">John Doe</strong>invite you to <strong>Prototyping</strong>',
      time: '45 min ago',
    },
    {
      id: 2,
      profile: 'profile-34.jpeg',
      message: '<strong className="mr-1 text-sm">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
      time: '9h Ago',
    },
    {
      id: 3,
      profile: 'profile-16.jpeg',
      message: '<strong className="mr-1 text-sm">Anna Morgan</strong>Upload a file',
      time: '9h Ago',
    },
  ]);

  const removeNotification = (value: number) => {
    setNotifications(notifications.filter((user) => user.id !== value));
  };

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
            <div className="dropdown shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={
                  <span>
                    <IconBellBing />
                    <span className="absolute top-0 flex w-3 h-3 ltr:right-0 rtl:left-0">
                      <span className="animate-ping absolute ltr:-left-[3px] rtl:-right-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-success/50 opacity-75"></span>
                      <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-success"></span>
                    </span>
                  </span>
                }
              >
                <ul className="!py-0 text-dark dark:text-white-dark w-[300px] sm:w-[350px] divide-y dark:divide-white/10">
                  <li onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between px-4 py-2 font-semibold">
                      <h4 className="text-lg">Notification</h4>
                      {notifications.length ? <span className="badge bg-primary/80">{notifications.length}New</span> : ''}
                    </div>
                  </li>
                  {notifications.length > 0 ? (
                    <>
                      {notifications.map((notification) => {
                        return (
                          <li key={notification.id} className="dark:text-white-light/90" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center px-4 py-2 group">
                              <div className="grid rounded place-content-center">
                                <div className="relative w-12 h-12">
                                  <img className="object-cover w-12 h-12 rounded-full" alt="profile" src={`/assets/images/${notification.profile}`} />
                                  <span className="bg-success w-2 h-2 rounded-full block absolute right-[6px] bottom-0"></span>
                                </div>
                              </div>
                              <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                                <div className="ltr:pr-3 rtl:pl-3">
                                  <h6
                                    dangerouslySetInnerHTML={{
                                      __html: notification.message,
                                    }}
                                  ></h6>
                                  <span className="block text-xs font-normal dark:text-gray-500">{notification.time}</span>
                                </div>
                                <button
                                  type="button"
                                  className="opacity-0 ltr:ml-auto rtl:mr-auto text-neutral-300 hover:text-danger group-hover:opacity-100"
                                  onClick={() => removeNotification(notification.id)}
                                >
                                  <IconXCircle />
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                      <li>
                        <div className="p-4">
                          <button className="block w-full btn btn-primary btn-small">Read All Notifications</button>
                        </div>
                      </li>
                    </>
                  ) : (
                    <li onClick={(e) => e.stopPropagation()}>
                      <button type="button" className="!grid place-content-center hover:!bg-transparent text-lg min-h-[200px]">
                        <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30 text-primary">
                          <IconInfoCircle fill={true} className="w-10 h-10" />
                        </div>
                        No data available.
                      </button>
                    </li>
                  )}
                </ul>
              </Dropdown>
            </div>
            <div className="flex dropdown shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative group block"
                button={<img className="object-cover rounded-full w-9 h-9 saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="userProfile" />}
              >
                <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img className="object-cover w-10 h-10 rounded-md" src="/assets/images/user-profile.jpeg" alt="userProfile" />
                      <div className="truncate ltr:pl-4 rtl:pr-4">
                        <h4 className="text-base">
                          John Doe
                          <span className="px-1 text-xs rounded bg-success-light text-success ltr:ml-2 rtl:ml-2">Pro</span>
                        </h4>
                        <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                          johndoe@gmail.com
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
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <Link to="/login" className="text-danger !py-3">
                      <IconLogout className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* horizontal menu */}
        <HorizontalMenu />
      </div>
    </header>
  );
};

export default Header;
