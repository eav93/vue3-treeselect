/**
 * Label as compared by `creatable`: trimmed, case-insensitive (`Apple`, ` apple ` — the same option)
 */
export function labelKey(label: unknown): string {
  return String(label).trim().toLocaleLowerCase()
}
