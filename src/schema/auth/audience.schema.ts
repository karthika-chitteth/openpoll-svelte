import * as Yup from 'yup';

export const AudienceSchema = Yup.object().shape({
  name: Yup.string().required('* Name field is required')
});
