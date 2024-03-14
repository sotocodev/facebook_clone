import styles from './SignUp.module.css'
import RegisterHeader from '../../molecules/RegisterHeader/RegisterHeader';
import RegisterFooter from '../../molecules/RegisterFooter/RegisterFooter';
import RegisterForm from '../../molecules/RegisterForm/RegisterForm';

const SignUp = () => {
  return (
    <>
      <RegisterHeader></RegisterHeader>
      <RegisterFooter></RegisterFooter>
      <RegisterForm></RegisterForm>
    </>
  )
}

export default SignUp;