import { TypeForm } from "../interface/form"


export class Form {
  title: string = ''
  description: string = ''
  type: TypeForm = TypeForm.TABLE
  columns = []
  fields = []
}
