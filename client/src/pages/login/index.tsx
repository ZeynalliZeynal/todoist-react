import { useEffect } from 'react'
import Logo from '../../components/Logo.tsx'
import Form from '../../components/Form.tsx'
import { Link } from 'react-router-dom'

export default function Login() {
  useEffect(() => {
    document.title = 'Log in to Todoist'
  }, [])

  return (
    <div className="p-6 flex flex-col gap-8 items-center">
      <header className="w-full">
        <nav className="mx-auto max-w-[940px] w-full pb-8">
          <Logo />
        </nav>
      </header>
      <main className="pt-8 w-full">
        <div className="max-w-[940px] w-full mx-auto">
          <div className="flex justify-between">
            <div className="w-5/12">
              <div className="flex flex-col gap-4">
                <h1 className="text-[32px] font-bold pb-8 capitalize">
                  Log in
                </h1>
                <Form type={'login'} />{' '}
                <Link
                  to="/"
                  className="text-gray-900 text-[13px] underline justify-start"
                >
                  Forgot your password?{' '}
                </Link>
                <p className="text-gray-900 text-[13px] border-b border-gray-100 pb-3">
                  By continuing with Google, Apple, or Email, you agree to
                  Todoist’s{' '}
                  <a
                    className="underline"
                    href="https://todoist.com/terms"
                    target="_blank"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    className="underline"
                    href="https://todoist.com/privacy"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
                <p className="text-gray-900 text-[13px]">
                  Don’t have an account?{' '}
                  <Link className="underline" to="/register">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
