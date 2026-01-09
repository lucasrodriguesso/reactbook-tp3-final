import { createContext, useCallback, useContext, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', ttl = 4000) => {
    const id = Date.now() + Math.random();
    const toast = { id, message, type };
    setToasts(t => [...t, toast]);
    if (ttl > 0) {
      setTimeout(() => {
        setToasts(t => t.filter(x => x.id !== id));
      }, ttl);
    }
    return id;
  }, []);

  const removeToast = useCallback((id) => setToasts(t => t.filter(x => x.id !== id)), []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { showToast: () => {}, removeToast: () => {}, toasts: [] };
  return ctx;
}

export default ToastContext;
