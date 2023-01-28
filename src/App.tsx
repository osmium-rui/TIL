import "./styles.css";
import Form from '@rjsf/core';
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
// read form data.
import formData from './json/formData.json';

const schema: RJSFSchema = {
  title: "Test form",
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    age: {
      type: "number"
    }
    //,
    //file: {
    //  "type": "string",
    //  "format": "data-url",
    //  "title": "Single file"
    //},
  }
};


const onChange = (formObj: { formData: any; }) => {
  //console.log(formObj.formData);
};


const onSubmit = (formObj: { formData: any; }) => {
  console.log(formObj.formData);
};

export default function App() {
  
  return (
    <div className="App">
      <h2>JSON Schema form sample</h2>
      <Form schema={schema} 
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
      validator={validator} />
    </div>
  );
}
