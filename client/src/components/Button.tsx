import React from 'react'
import classNames from 'classnames'

type ButtonType = {
  variant?: 'transparent' | 'red' | 'submit' | 'form' | 'form-red'
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'transparent',
  onClick,
  children,
}: ButtonType) {
  return (
    <button
      className={classNames(
        'py-[9px] px-[14px] rounded-button font-semibold text-gray-700 hover:bg-gray-700-7 transition-colors active:scale-[0.97] tracking-wide',
        {
          'bg-red-500 hover:bg-red-600 text-white font-bold': variant === 'red',
          'bg-red-500 hover:bg-red-600 text-white font-bold px-4 w-full':
            variant === 'submit',
          'px-3 text-[14px] bg-gray-100': variant === 'form',
          'px-3 bg-red-500 hover:bg-red-600 text-white font-bold text-[14px]':
            variant === 'form-red',
        },
      )}
      onClick={onClick}
      type={children === 'Cancel' ? 'button' : 'submit'}
    >
      <span className="px-1">{children}</span>
    </button>
  )
}
