function Label({
  label = "",
  children = <></>,
  className = "space-y-2 p-2 w-1/4"
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-white">{label}</label>
      {children}
    </div>
  )
}

export default Label
