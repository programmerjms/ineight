import {useAdminGate} from '../lib/useAdminGate';
export default function Admin(){
  const allowed=useAdminGate();
  if(!allowed) return <div className='p-4 text-red-600'>Not authorized</div>;
  return <div className='p-4'>Admin Panel Placeholder</div>;
}