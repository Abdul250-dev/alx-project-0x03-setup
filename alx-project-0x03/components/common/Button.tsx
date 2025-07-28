interface ButtonProps {
  buttonLabel: string
  buttonSize?: 'sm' | 'md' | 'lg'
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

const Button = ({ 
  buttonLabel, 
  buttonSize = 'md', 
  buttonBackgroundColor = 'blue', 
  action 
}: ButtonProps) => {

  const backgroundColorClasses = {
    red: 'bg-red-500 hover:bg-red-400',
    blue: 'bg-blue-500 hover:bg-blue-400',
    orange: 'bg-orange-500 hover:bg-orange-400',
    green: 'bg-green-500 hover:bg-green-400',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  const colorClass = backgroundColorClasses[buttonBackgroundColor]
  const sizeClass = sizeClasses[buttonSize]

  return (
    <button 
      onClick={action} 
      className={`${colorClass} ${sizeClass} font-semibold rounded-lg transition duration-300 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonBackgroundColor}-500`}
    >
      {buttonLabel}
    </button>
  )
}

export default Button;