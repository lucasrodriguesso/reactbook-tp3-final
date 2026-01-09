import React from 'react';
import { useToast } from '../context/ToastContext';

function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type || 'info'}`}>
          <div className="toast-message">{t.message}</div>
          <button className="toast-close" onClick={() => removeToast(t.id)} aria-label="Fermer">×</button>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
