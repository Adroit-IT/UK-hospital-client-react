import Input from '@components/atoms/Input';
import Button from '@components/molecules/Buton';
import Card from '@components/organisms/auth/Card';
import { setPageTitle } from '@configs/themeConfigSlice';
import { useAuth } from '@hooks/useAuth';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    dispatch(setPageTitle('Sign In'));

    // Redirect to the dashboard if the user is authenticated
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [dispatch, isAuthenticated, navigate]);

  const submitForm = async (values: FormValues) => {
    try {
      await login({
        email: values.email,
        password: values.password,
      });
    } catch (error: any) {
      if (error.response?.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Error',
          text: 'Invalid email or password. Please try again.',
        });
      }
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const SubmittedForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please fill the Email'),
    password: Yup.string().required('Please fill the Password'),
  });

  return (
    <Card>
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign in</h1>
        <p className="text-base font-bold leading-normal text-white-dark">Enter your email and password to login</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SubmittedForm}
        onSubmit={(values, { setSubmitting }) => {
          // Call the submitForm function with the values
          submitForm(values);

          // Set submitting to false to allow the form to be submitted again
          setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <Input name="email" label="Email" type="email" placeholder="Enter Email" />
            <Input name="password" label="Password" type="password" placeholder="Enter Password" />
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="bg-white form-checkbox dark:bg-black" />
                <span className="text-white-dark">Remember Me</span>
              </label>
              <NavLink to="/reset-email" className="text-white-dark">
                Forgot Password?
              </NavLink>
            </div>
            <Button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default Login;
