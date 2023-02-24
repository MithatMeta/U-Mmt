import * as yup from 'yup';

const validation = yup.object().shape({
    
    email: yup.string().email("Geçerli bir email girin").required("Zorunlu Alan"),
    password: yup.string("Lütfen sayı girn").min(5).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required()
    
  });

  export default validation;