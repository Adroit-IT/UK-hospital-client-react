import Card from '@component/organisms/auth/Card';
import { setPageTitle } from '@config/themeConfigSlice';
import IconLockDots from '@icon/IconLockDots';
import IconMail from '@icon/IconMail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Reset Email'));
  });
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/dashboard');
  };

  return (
    <Card>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign in</h1>
        <p className="text-base font-bold leading-normal text-white-dark">Enter your email and password to login</p>
      </div>
      <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
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
          Sign in
        </button>
      </form>
    </Card>
  );
};

export default Login;
