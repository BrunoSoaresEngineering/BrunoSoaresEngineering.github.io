export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY'
      }
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of:[{ type: 'workExperience'}]
    }
  ]
};
