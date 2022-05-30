type TextINputCoreProps = {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInputCore = (props: TextINputCoreProps) => {
  return <input type="text" {...props} />
}
