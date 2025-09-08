import { Link } from "react-router-dom";
import FieldComponent from "../components/FieldComponent";
import LabelComponent from "../components/LabelComponent";
import ButtonComponent from "../components/ButtonComponent";

export default function Login() {
  const fieldStyle =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelStyle =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
  const buttonStyle =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800 px-4'>
      <form className='w-full max-w-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-2xl p-6 sm:p-8 rounded-2xl'>
        <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white'>
          Login
        </h1>

        <div className='relative z-0 w-full mb-5 group'>
          <FieldComponent
            type='email'
            name='email'
            id='email'
            style={fieldStyle}
          />
          <LabelComponent
            style={labelStyle}
            _for='email'
            name='Email Address'
          />
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <FieldComponent
            type='password'
            name='password'
            id='password'
            style={fieldStyle}
          />
          <LabelComponent style={labelStyle} _for='password' name='Password' />
        </div>

        <div className='flex flex-col gap-4 mt-4'>
          <ButtonComponent type='submit' text='Login' style={buttonStyle} />

          <Link to='/register'>
            <p className='text-sm text-center text-gray-700 dark:text-gray-300'>
              Don't have an account?{" "}
              <span className='text-blue-600 dark:text-blue-500 hover:underline'>
                Register
              </span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
