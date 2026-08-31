function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-sm text-subtle" role="status">
      <span
        className="size-8 animate-spin rounded-full border-2 border-edge border-t-brand-500"
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  )
}

export default Loader
