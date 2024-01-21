import Card from '@components/organisms/auth/Card';
import { setPageTitle } from '@config/themeConfigSlice';
import IconLockDots from '@icon/IconLockDots';
import IconMail from '@icon/IconMail';
import IconUser from '@icon/IconUser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Register'));
  });
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/');
  };

  return (
    <Card>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign Up</h1>
        <p className="text-base font-bold leading-normal text-white-dark">Enter your email and password to register</p>
      </div>
      <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
        <div>
          <label htmlFor="Name">Name</label>
          <div className="relative text-white-dark">
            <input id="Name" type="text" placeholder="Enter Name" className="form-input ps-10 placeholder:text-white-dark" />
            <span className="absolute -translate-y-1/2 start-4 top-1/2">
              <IconUser fill={true} />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <div className="relative text-white-dark">
            <input id="Email" type="email" placeholder="Enter Email" className="form-input ps-10 placeholder:text-white-dark" />
            <span className="absolute -translate-y-1/2 start-4 top-1/2">
              <IconMail fill={true} />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <div className="relative text-white-dark">
            <input id="Password" type="password" placeholder="Enter Password" className="form-input ps-10 placeholder:text-white-dark" />
            <span className="absolute -translate-y-1/2 start-4 top-1/2">
              <IconLockDots fill={true} />
            </span>
          </div>
        </div>
        <div>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="bg-white form-checkbox dark:bg-black" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
          </label>
        </div>
        <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
          Sign Up
        </button>
      </form>
    </Card>
  );
};

export default Register;
