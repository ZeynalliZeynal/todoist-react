import { useEffect } from 'react'
import Logo from './Logo.tsx'
import Form from './Form.tsx'
import { Link } from 'react-router-dom'

type FormTemplateType = {
  type: 'signup' | 'login'
  onLogin?: (isLogin: boolean) => void
}

export default function FormTemplate({ type }: FormTemplateType) {
  useEffect(() => {
    document.title =
      type === 'signup'
        ? 'Sign up for a free Todoist account'
        : 'Log in to Todoist'
  }, [type])
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
                  {type === 'login' ? 'Log in' : 'Sign up'}
                </h1>
                <Form type={type} />{' '}
                {type === 'login' && (
                  <Link
                    to="/"
                    className="text-gray-900 text-[13px] underline justify-start"
                  >
                    Forgot your password?{' '}
                  </Link>
                )}
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
                {type === 'login' ? (
                  <p className="text-gray-900 text-[13px]">
                    Don’t have an account?{' '}
                    <Link className="underline" to="/register">
                      Sign up
                    </Link>
                  </p>
                ) : (
                  <p className="text-gray-900 text-[13px]">
                    Already signed up?{' '}
                    <Link className="underline" to="/login">
                      Go to login
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export type { FormTemplateType }
