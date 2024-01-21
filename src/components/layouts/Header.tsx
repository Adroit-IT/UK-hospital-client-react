import Dropdown from '@atom/Dropdown';
import { toggleRTL, toggleSidebar, toggleTheme } from '@config/themeConfigSlice';
import { IRootState } from '@config/themeRoot';
import IconArrowLeft from '@icon/IconArrowLeft';
import IconBellBing from '@icon/IconBellBing';
import IconCalendar from '@icon/IconCalendar';
import IconCaretDown from '@icon/IconCaretDown';
import IconChatNotification from '@icon/IconChatNotification';
import IconEdit from '@icon/IconEdit';
import IconInfoCircle from '@icon/IconInfoCircle';
import IconLaptop from '@icon/IconLaptop';
import IconLockDots from '@icon/IconLockDots';
import IconLogout from '@icon/IconLogout';
import IconMail from '@icon/IconMail';
import IconMailDot from '@icon/IconMailDot';
import IconMenu from '@icon/IconMenu';
import IconMoon from '@icon/IconMoon';
import IconSearch from '@icon/IconSearch';
import IconSun from '@icon/IconSun';
import IconUser from '@icon/IconUser';
import IconXCircle from '@icon/IconXCircle';
import IconMenuApps from '@icon/Menu/IconMenuApps';
import IconMenuComponents from '@icon/Menu/IconMenuComponents';
import IconMenuDashboard from '@icon/Menu/IconMenuDashboard';
import IconMenuDatatables from '@icon/Menu/IconMenuDatatables';
import IconMenuElements from '@icon/Menu/IconMenuElements';
import IconMenuForms from '@icon/Menu/IconMenuForms';
import IconMenuMore from '@icon/Menu/IconMenuMore';
import IconMenuPages from '@icon/Menu/IconMenuPages';
import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

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

  function createMarkup(messages: any) {
    return { __html: messages };
  }
  const [messages, setMessages] = useState([
    {
      id: 1,
      image:
        '<span className="grid rounded-full place-content-center w-9 h-9 bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
      title: 'Congratulations!',
      message: 'Your OS has been updated.',
      time: '1hr',
    },
    {
      id: 2,
      image:
        '<span className="grid rounded-full place-content-center w-9 h-9 bg-info-light dark:bg-info text-info dark:text-info-light"><svg g xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
      title: 'Did you know?',
      message: 'You can switch between artboards.',
      time: '2hr',
    },
    {
      id: 3,
      image:
        '<span className="grid rounded-full place-content-center w-9 h-9 bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
      title: 'Something went wrong!',
      message: 'Send Reposrt',
      time: '2days',
    },
    {
      id: 4,
      image:
        '<span className="grid rounded-full place-content-center w-9 h-9 bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
      title: 'Warning',
      message: 'Your password strength is low.',
      time: '5days',
    },
  ]);

  const removeMessage = (value: number) => {
    setMessages(messages.filter((user) => user.id !== value));
  };

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

  const { t } = useTranslation();

  return (
    <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
      <div className="shadow-sm">
        <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">
          <div className="flex items-center justify-between horizontal-logo lg:hidden ltr:mr-2 rtl:ml-2">
            <Link to="/" className="flex items-center main-logo shrink-0">
              <img className="inline w-8 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.svg" alt="logo" />
              <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                {import.meta.env.APP_NAME}
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

          <div className="hidden ltr:mr-2 rtl:ml-2 sm:block">
            <ul className="flex items-center space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
              <li>
                <Link to="/apps/calendar" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                  <IconCalendar />
                </Link>
              </li>
              <li>
                <Link to="/apps/todolist" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                  <IconEdit />
                </Link>
              </li>
              <li>
                <Link to="/apps/chat" className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                  <IconChatNotification />
                </Link>
              </li>
            </ul>
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
            <div className="dropdown shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={<IconMailDot />}
              >
                <ul className="!py-0 text-dark dark:text-white-dark w-[300px] sm:w-[375px] text-xs">
                  <li className="mb-5" onClick={(e) => e.stopPropagation()}>
                    <div className="hover:!bg-transparent overflow-hidden relative rounded-t-md p-5 text-white w-full !h-[68px]">
                      <div
                        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover bg-"
                        style={{
                          backgroundImage: `url('/assets/images/menu-heade.jpg')`,
                          backgroundRepeat: 'no-repeat',
                          width: '100%',
                          height: '100%',
                        }}
                      ></div>
                      <h4 className="relative z-10 text-lg font-semibold">Messages</h4>
                    </div>
                  </li>
                  {messages.length > 0 ? (
                    <>
                      <li onClick={(e) => e.stopPropagation()}>
                        {messages.map((message) => {
                          return (
                            <div key={message.id} className="flex items-center px-5 py-3">
                              <div dangerouslySetInnerHTML={createMarkup(message.image)}></div>
                              <span className="px-3 dark:text-gray-500">
                                <div className="text-sm font-semibold dark:text-white-light/90">{message.title}</div>
                                <div>{message.message}</div>
                              </span>
                              <span className="px-1 font-semibold whitespace-pre rounded bg-white-dark/20 text-dark/60 ltr:ml-auto rtl:mr-auto dark:text-white-dark ltr:mr-2 rtl:ml-2">
                                {message.time}
                              </span>
                              <button type="button" className="text-neutral-300 hover:text-danger" onClick={() => removeMessage(message.id)}>
                                <IconXCircle />
                              </button>
                            </div>
                          );
                        })}
                      </li>
                      <li className="mt-5 text-center border-t border-white-light dark:border-white/10">
                        <button type="button" className="text-primary font-semibold group dark:text-gray-400 justify-center !py-4 !h-[48px]">
                          <span className="group-hover:underline ltr:mr-1 rtl:ml-1">VIEW ALL ACTIVITIES</span>
                          <IconArrowLeft className="transition duration-300 group-hover:translate-x-1 ltr:ml-1 rtl:mr-1" />
                        </button>
                      </li>
                    </>
                  ) : (
                    <li className="mb-5" onClick={(e) => e.stopPropagation()}>
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
                  <li>
                    <Link to="/apps/mailbox" className="dark:hover:text-white">
                      <IconMail className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                      Inbox
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/boxed-lockscreen" className="dark:hover:text-white">
                      <IconLockDots className="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 shrink-0" />
                      Lock Screen
                    </Link>
                  </li>
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <Link to="/auth/boxed-signin" className="text-danger !py-3">
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
        <ul className="horizontal-menu hidden py-1.5 font-semibold px-6 lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse bg-white border-t border-[#ebedf2] dark:border-[#191e3a] dark:bg-black text-black dark:text-white-dark">
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuDashboard className="shrink-0" />
                <span className="px-1">{t('dashboard')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/">{t('sales')}</NavLink>
              </li>
              <li>
                <NavLink to="/analytics">{t('analytics')}</NavLink>
              </li>
              <li>
                <NavLink to="/finance">{t('finance')}</NavLink>
              </li>
              <li>
                <NavLink to="/crypto">{t('crypto')}</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuApps className="shrink-0" />
                <span className="px-1">{t('apps')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/apps/chat">{t('chat')}</NavLink>
              </li>
              <li>
                <NavLink to="/apps/mailbox">{t('mailbox')}</NavLink>
              </li>
              <li>
                <NavLink to="/apps/todolist">{t('todo_list')}</NavLink>
              </li>
              <li>
                <NavLink to="/apps/notes">{t('notes')}</NavLink>
              </li>
              <li>
                <NavLink to="/apps/scrumboard">{t('scrumboard')}</NavLink>
              </li>
              <li>
                <NavLink to="/apps/contacts">{t('contacts')}</NavLink>
              </li>
              <li className="relative">
                <button type="button">
                  {t('invoice')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/apps/invoice/list">{t('list')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps/invoice/preview">{t('preview')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps/invoice/add">{t('add')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps/invoice/edit">{t('edit')}</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/apps/calendar">{t('calendar')}</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuComponents className="shrink-0" />
                <span className="px-1">{t('components')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/components/tabs">{t('tabs')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/accordions">{t('accordions')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/modals">{t('modals')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/cards">{t('cards')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/carousel">{t('carousel')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/countdown">{t('countdown')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/counter">{t('counter')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/sweetalert">{t('sweet_alerts')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/timeline">{t('timeline')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/notifications">{t('notifications')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/media-object">{t('media_object')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/list-group">{t('list_group')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/pricing-table">{t('pricing_tables')}</NavLink>
              </li>
              <li>
                <NavLink to="/components/lightbox">{t('lightbox')}</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuElements className="shrink-0" />
                <span className="px-1">{t('elements')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/elements/alerts">{t('alerts')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/avatar">{t('avatar')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/badges">{t('badges')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/breadcrumbs">{t('breadcrumbs')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/buttons">{t('buttons')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/buttons-group">{t('button_groups')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/color-library">{t('color_library')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/dropdown">{t('dropdown')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/infobox">{t('infobox')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/jumbotron">{t('jumbotron')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/loader">{t('loader')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/pagination">{t('pagination')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/popovers">{t('popovers')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/progress-bar">{t('progress_bar')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/search">{t('search')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/tooltips">{t('tooltips')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/treeview">{t('treeview')}</NavLink>
              </li>
              <li>
                <NavLink to="/elements/typography">{t('typography')}</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuDatatables className="shrink-0" />
                <span className="px-1">{t('tables')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/tables">{t('tables')}</NavLink>
              </li>
              <li className="relative">
                <button type="button">
                  {t('datatables')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/datatables/basic">{t('basic')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/advanced">{t('advanced')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/skin">{t('skin')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/order-sorting">{t('order_sorting')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/multi-column">{t('multi_column')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/multiple-tables">{t('multiple_tables')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/alt-pagination">{t('alt_pagination')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/checkbox">{t('checkbox')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/range-search">{t('range_search')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/export">{t('export')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/datatables/column-chooser">{t('column_chooser')}</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuForms className="shrink-0" />
                <span className="px-1">{t('forms')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/forms/basic">{t('basic')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/input-group">{t('input_group')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/layouts">{t('layouts')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/validation">{t('validation')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/input-mask">{t('input_mask')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/select2">{t('select2')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/touchspin">{t('touchspin')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/checkbox-radio">{t('checkbox_and_radio')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/switches">{t('switches')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/wizards">{t('wizards')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/file-upload">{t('file_upload')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/quill-editor">{t('quill_editor')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/markdown-editor">{t('markdown_editor')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/date-picker">{t('date_and_range_picker')}</NavLink>
              </li>
              <li>
                <NavLink to="/forms/clipboard">{t('clipboard')}</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuPages className="shrink-0" />
                <span className="px-1">{t('pages')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li className="relative">
                <button type="button">
                  {t('users')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/users/profile">{t('profile')}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users/user-account-settings">{t('account_settings')}</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/pages/knowledge-base">{t('knowledge_base')}</NavLink>
              </li>
              <li>
                <NavLink to="/pages/contact-us-boxed" target="_blank">
                  {t('contact_us_boxed')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages/contact-us-cover" target="_blank">
                  {t('contact_us_cover')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages/faq">{t('faq')}</NavLink>
              </li>
              <li>
                <NavLink to="/pages/coming-soon-boxed" target="_blank">
                  {t('coming_soon_boxed')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages/coming-soon-cover" target="_blank">
                  {t('coming_soon_cover')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages/maintenence" target="_blank">
                  {t('maintenence')}
                </NavLink>
              </li>
              <li className="relative">
                <button type="button">
                  {t('error')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/pages/error404" target="_blank">
                      {t('404')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/error500" target="_blank">
                      {t('500')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pages/error503" target="_blank">
                      {t('503')}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <button type="button">
                  {t('login')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/auth/cover-login" target="_blank">
                      {t('login_cover')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/boxed-signin" target="_blank">
                      {t('login_boxed')}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <button type="button">
                  {t('register')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/auth/cover-register" target="_blank">
                      {t('register_cover')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/boxed-signup" target="_blank">
                      {t('register_boxed')}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <button type="button">
                  {t('password_recovery')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/auth/cover-password-reset" target="_blank">
                      {t('recover_id_cover')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/boxed-password-reset" target="_blank">
                      {t('recover_id_boxed')}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <button type="button">
                  {t('lockscreen')}
                  <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                    <IconCaretDown />
                  </div>
                </button>
                <ul className="rounded absolute top-0 ltr:left-[95%] rtl:right-[95%] min-w-[180px] bg-white z-[10] text-dark dark:text-white-dark dark:bg-[#1b2e4b] shadow p-0 py-2 hidden">
                  <li>
                    <NavLink to="/auth/cover-lockscreen" target="_blank">
                      {t('unlock_cover')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/boxed-lockscreen" target="_blank">
                      {t('unlock_boxed')}
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="relative menu nav-item">
            <button type="button" className="nav-link">
              <div className="flex items-center">
                <IconMenuMore className="shrink-0" />
                <span className="px-1">{t('more')}</span>
              </div>
              <div className="right_arrow">
                <IconCaretDown />
              </div>
            </button>
            <ul className="sub-menu">
              <li>
                <NavLink to="/dragndrop">{t('drag_and_drop')}</NavLink>
              </li>
              <li>
                <NavLink to="/charts">{t('charts')}</NavLink>
              </li>
              <li>
                <NavLink to="/font-icons">{t('font_icons')}</NavLink>
              </li>
              <li>
                <NavLink to="/widgets">{t('widgets')}</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;