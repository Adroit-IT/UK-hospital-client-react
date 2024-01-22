import Card from '@component/organisms/auth/Card';
import { setPageTitle } from '@config/themeConfigSlice';
import IconMail from '@icon/IconMail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ResetEmail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Reset Email'));
  });
  const navigate = useNavigate();

  const submitForm = () => {
    navigate('/login');
  };

  return (
    <Card>
      <div className="mb-7">
        <h1 className="mb-3 text-2xl font-bold !leading-snug dark:text-white">Password Reset</h1>
        <p>Enter your email to recover your ID</p>
      </div>
      <form className="space-y-5" onSubmit={submitForm}>
        <div>
          <label htmlFor="Email" className="dark:text-white">
            Email
          </label>
          <div className="relative text-white-dark">
            <input id="Email" type="email" placeholder="Enter Email" className="form-input ps-10 placeholder:text-white-dark" />
            <span className="absolute -translate-y-1/2 start-4 top-1/2">
              <IconMail fill={true} />
            </span>
          </div>
        </div>
        <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
          RECOVER
        </button>
      </form>
    </Card>
  );
};

export default ResetEmail;
