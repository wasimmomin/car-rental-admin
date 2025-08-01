export default function Notification({ type, message, onClose }) {
  const bgColor = type === 'error' ? 'bg-red-100' : 'bg-green-100';
  const textColor = type === 'error' ? 'text-red-800' : 'text-green-800';
  const borderColor = type === 'error' ? 'border-red-400' : 'border-green-400';

  return (
    <div className={`mb-4 border ${borderColor} ${bgColor} ${textColor} px-4 py-3 rounded relative`}>
      <span className="block sm:inline">{message}</span>
      {onClose && (
        <button onClick={onClose} className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className={`fill-current h-6 w-6 ${textColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
          </svg>
        </button>
      )}
    </div>
  );
}