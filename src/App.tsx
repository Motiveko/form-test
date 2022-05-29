import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Layout from './layout/Layout';
// import Form from './feature/Form/Form';
import Form from './feature/Form';

type Inputs = {
  example: string;
  exampleRequired: string;
  hello: string;
};

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <input className="input is-primary" type="text" placeholder="Primary input" />

      <Layout>
        <Form.FormGroup horizontal>
          <Form.Label>이름</Form.Label>
          <Form.Input type="text" />
        </Form.FormGroup>
        <Form.FormGroup horizontal>
          <Form.Label>이메일</Form.Label>
          <Form.Input type="email" placeholder="zz"></Form.Input>
        </Form.FormGroup>
        <Form.FormGroup horizontal>
          <Form.Label>DISABLED</Form.Label>
          <Form.Input type="text" disabled rounded></Form.Input>
        </Form.FormGroup>
      </Layout>
    </>
  );
};

export default App;
