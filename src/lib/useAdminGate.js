export function useAdminGate(){
  const params=new URLSearchParams(window.location.search);
  const key=params.get('key');
  return key===import.meta.env.VITE_ADMIN_GATE_KEY;
}