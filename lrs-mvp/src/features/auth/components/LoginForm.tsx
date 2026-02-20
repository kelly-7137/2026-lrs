import { FormEvent, useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';

export const LoginForm = () => {
  const { signIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signIn(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : '로그인 실패');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>로그인</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <Button type="submit">로그인</Button>
      {error && <p>{error}</p>}
    </form>
  );
};
