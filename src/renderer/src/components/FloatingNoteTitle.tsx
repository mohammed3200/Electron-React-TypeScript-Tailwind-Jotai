/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'Note title'
  return (
    <div className={twMerge('text-lg font-bold', className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
