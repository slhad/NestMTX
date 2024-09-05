export class MissingStreamCharacteristicsException extends Error {
  readonly missing: string[]
  readonly characteristics: any

  constructor(missing: string[], characteristics: any) {
    super(
      `Missing stream characteristics: ${missing.join(', ')}. It is likely that the stream URL timed out.`
    )
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
    this.missing = missing
    this.characteristics = characteristics
  }
}