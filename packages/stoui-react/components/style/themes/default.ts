export default {
  // Button
  button: {
    rounded: 'rounded-full',
    block: 'flex justify-center w-full',
    default: 'text-white focus:outline-none shadow font-medium transition ease-in duration-200',
    disabled: 'opacity-60 cursor-not-allowed',
    size: {
      small: 'px-6 py-1 text-sm',
      medium: 'px-6 py-2',
      large: 'px-6 py-3 text-lg'
    },
    primary: 'bg-blue-700',
    success: 'bg-green-700',
    danger: 'bg-red-600',
    warning: 'bg-yellow-500',
    indigo: 'bg-indigo-900',
    dark: 'bg-black',
    link: '',
    text: ''
  },
  // Alert
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-green-50 text-green-900 dark:bg-green-600 dark:text-white',
    danger: 'bg-red-50 text-red-900 dark:bg-red-600 dark:text-white',
    warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white',
    neutral: 'bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    info: 'bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white',
    icon: {
      base: 'h-5 w-5',
      success: 'text-green-400 dark:text-green-300',
      danger: 'text-red-400 dark:text-red-300',
      warning: 'text-yellow-400 dark:text-yellow-100',
      neutral: 'text-gray-400 dark:text-gray-500',
      info: 'text-blue-400 dark:text-blue-300'
    }
  }
};
