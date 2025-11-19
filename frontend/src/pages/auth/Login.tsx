import { useState } from 'react'
import Input from '../../components/Input'
import AuthLayout from '../../components/layouts/AuthLayout'
import toast from 'react-hot-toast'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateLogin(user.email, user.password)) return

    console.log(user)
  }

  const handleGuestLogin = async () => {
    alert('Guest')
  }

  const handleChnage = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }))
  }

  const validateLogin = (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      toast.error('Please fill all fields')
      return false
    }

    return true
  }
  return (
    <AuthLayout>
      <div className='flex items-center justify-center w-full h-full'>
        <div className='card flex flex-col flex-1 m-10 max-w-md h-2/3'>

          <div className='text-start w-full'>
            <h1 className='text-2xl font-bold'>Welcome!</h1>
            <p className='text-gray-500'>Enter your details to continue</p>
          </div>

          <form onSubmit={handleLogin} className='w-full flex flex-col gap-8 mt-10'>
            <Input value={user.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (handleChnage('email', e.target.value))} name='email' type='email' placeholder='email@example.com' label='Email Adress' />
            <Input value={user.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (handleChnage('password', e.target.value))} name='password' type='password' placeholder='*********' label='Password' />

            <button className='btn-primary'>Login</button>
          </form>

          <div className='flex flex-wrap gap-1 mt-auto text-nowrap'>
            <p className='text-gray-600'>If you don't have an account please</p>
            <button onClick={handleGuestLogin} className='underline text-blue-500 hover:text-blue-400 transition-colors'>
              enter as a guest
            </button>
          </div>

        </div>
      </div>
    </AuthLayout>
  )
}

export default Login