export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          name: 'project',
          title: 'Project',
          type: 'reference',
          to: [{ type: 'works'}]
        }
      ]
    }
  ]
};
