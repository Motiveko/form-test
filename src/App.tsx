import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Layout from './layout/Layout';
import Form from './feature/Form';

type Inputs = {
  name: string;
  email: string;
};

const App: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [value, setValue] = useState('');
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);
  const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => console.log('blur발생');
  console.log('====랜더링');
  return (
    <>
      <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
      <Layout>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.FormGroup horizontal>
            <Form.Label>이름</Form.Label>
            <Controller
              name="name"
              control={control}
              // TODO : 에러나는데 어떻게 해야하는지 잘 모르겠다. onChange, value 두개만 줫는데...
              render={({ field: { onChange, onBlur, value } }) => (
                <Form.Input onChange={onChange} onBlur={onBlur} value={value} type="text" />
              )}
            />
          </Form.FormGroup>
          <Form.FormGroup horizontal>
            <Form.Label>이메일</Form.Label>
            <Controller
              name="email"
              control={control}
              render={() => <Form.Input type="email" placeholder="zz" />}
            />
          </Form.FormGroup>
          <Form.FormGroup horizontal>
            <Form.Label>DISABLED</Form.Label>
            <Form.Input type="text" disabled rounded></Form.Input>
          </Form.FormGroup>
          <button type="submit">제출</button>
        </Form>
      </Layout>
    </>
  );
};

export default App;
