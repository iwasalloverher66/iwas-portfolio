import type { FieldError, FieldErrors, FieldValues, Resolver } from 'react-hook-form';
import type { z } from 'zod';

// Minimal replacement for @hookform/resolvers/zod, enough for flat forms
export function zodResolver<TSchema extends z.ZodType<FieldValues, FieldValues>>(
  schema: TSchema
): Resolver<z.input<TSchema>, unknown, z.output<TSchema>> {
  return async values => {
    const result = await schema.safeParseAsync(values)

    if (result.success) {
      return { values: result.data, errors: {} }
    }

    const errors: Record<string, FieldError> = {}

    for (const issue of result.error.issues) {
      const path = issue.path.join('.')
      errors[path] ??= { type: issue.code, message: issue.message }
    }

    return { values: {}, errors: errors as FieldErrors<z.input<TSchema>> }
  }
}
