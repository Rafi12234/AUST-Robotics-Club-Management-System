import { X } from 'lucide-react'

function Modal({ isOpen, title, onClose, children }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-60 grid animate-fade-in place-items-center bg-black/60 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg animate-rise rounded-lg border border-edge bg-surface-2 shadow-lg"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-edge-subtle p-5">
          <h2 className="text-[1.0625rem]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-9 place-items-center rounded-sm text-subtle transition duration-base ease-standard hover:bg-surface-hover hover:text-ink"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}

export default Modal
