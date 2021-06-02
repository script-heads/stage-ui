export interface ValidateObject {
  error?: string
  regex: RegExp
  isMatch?: boolean
}

function validate(validate: ValidateObject[], value: string) {
  const errors: string[] = []

  if (validate) {
    validate.forEach((item) => {
      if (item.regex.test(value) === Boolean(item.isMatch)) {
        errors.push(item.error || `Значение '${value}' не соответсвует регулярному выражению ${item.regex}`)
      }
    })
  }

  return errors
}
