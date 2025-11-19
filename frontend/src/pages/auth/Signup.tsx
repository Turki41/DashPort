import { useState } from "react"
import Input from "../../components/Input"
import AuthLayout from "../../components/layouts/AuthLayout"

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [key, setKey] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(user, key)
  }

  const handleChnage = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <AuthLayout>
      <div className='flex items-center justify-center w-full h-full'>
        <div className='card flex flex-col flex-1 m-10 max-w-md h-2/3'>

          <div className='text-start w-full'>
            <h1 className='text-2xl font-bold'>Welcome Back!</h1>
            <p className='text-gray-500'>The private backroom.</p>
          </div>

          <form onSubmit={handleSignup} className='w-full flex flex-col gap-3 mt-2'>
            <Input value={user.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (handleChnage('name', e.target.value))} name='name' type='text' placeholder='name' label='Full Name' />
            <Input value={user.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (handleChnage('email', e.target.value))} name='email' type='email' placeholder='email@example.com' label='Email Adress' />
            <Input value={user.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (handleChnage('password', e.target.value))} name='password' type='password' placeholder='*********' label='Password' />
            <Input value={key} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (setKey(e.target.value))} name='key' type='text' placeholder='*********' label='Key' />


            <button className='btn-primary mt-3'>Signup</button>
          </form>

        </div>
      </div>
    </AuthLayout>
  )
}

export default Signup