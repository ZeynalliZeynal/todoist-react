import Button from './Button.tsx'
import { FormTemplateType } from './FormTemplate.tsx'

const labelStyle: string =
  'rounded-[10px] flex flex-col border border-inputBorder focus-within:border-borderFocus px-2 pt-2 pb-1 text-[12px] transition-colors'
const inputStyle: string =
  'text-[1rem] font-bold placeholder:text-gray-500 placeholder:font-light'

export default function Form({ type }: FormTemplateType) {
  return (
    <form action="#" className="flex gap-4 flex-col">
      <label htmlFor="email" className={labelStyle}>
        Email
        <input
          className={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
        />
      </label>
      <label htmlFor="password" className={labelStyle}>
        Password
        <input
          className={inputStyle}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </label>
      <Button variant="submit">
        {type === 'signup' ? 'Sign up with Email' : 'Log in'}
      </Button>
    </form>
  )
}
