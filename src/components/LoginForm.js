import { useForm } from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const { signIn } = useAuth();

  const onLogin = (data) => {
    signIn(data.email, data.password);
  };
  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" ref={register({ required: true })} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" ref={register({ required: true, minLength: 6 })} />
      <input type="submit" />
    </form>
  );
}
