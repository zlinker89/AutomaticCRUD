import { TypeForm } from "../interface/type-form"

export class Form {
  title: string = ''
  description: string = ''
  type: TypeForm = TypeForm.REMOTE
  fields = []
}
