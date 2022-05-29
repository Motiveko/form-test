# form-test

- 회사 프로젝트에 `react-form-hook` 과 `bulma` 도입 전 테스트를 위한 프로젝트

<br>

## 프로젝트 설정 참고

- [CRA없이 React환경 구축하기](https://velog.io/@kmlee95/CRA%EC%97%86%EC%9D%B4-React%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0) => 최신버전에서 안되는거 많으므로 커스터마이징 필요
- (타입스크립트 컴파일러 옵션)[https://it-eldorado.tistory.com/128]

<br>

## React Form Hook

- 기본적으로 `비제어 컴포넌트`(`ref` 사용)를 기반으로 동작한다.
- 외부 라이브러리 등을 사용해서 [제어 컴포넌트를 사용해야 하는 경우](https://react-hook-form.com/kr/get-started/#IntegratingControlledInputs) 라이브러리에서 제공하는 `Controller` 컴포넌트로 제어 컴포넌트를 랩핑하여 사용한다.

Validation
- 기본 validation 함수(도 제공하고 `custom validation 함수`도 작성 할 수있다.
- [`Yup`](https://www.npmjs.com/package/yup)같은 자바스크립트 스키마 빌더 라이브러리를 이용해 스키마를 만들고 해당 스키마를 [resolver](https://react-hook-form.com/ts#Resolver)에다 설정하는 방식으로 외부 라이브러리의 도움을 받아 [스키마 유효성 검사](https://react-hook-form.com/kr/get-started/#SchemaValidation)도 가능하다.

<br>

## 정리중
- [`chilren`에 props 전달하기](https://velog.io/@hyunjoogo/React-children-Component%EC%97%90-props-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0)
  - [JSX 이해하기](https://ko.reactjs.org/docs/jsx-in-depth.html)
- [React children prop with Typescript](https://blog.logrocket.com/using-react-children-prop-typescript/ )
