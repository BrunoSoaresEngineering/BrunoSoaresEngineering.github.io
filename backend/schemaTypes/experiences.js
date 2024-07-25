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
        dateFormat: 'YYYY-MM'
      }
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of:[
        {
          name: 'work',
          title: 'Work',
          type: 'reference',
          to: [{ type: 'workExperience'}]
        }
      ]
    }
  ]
};
