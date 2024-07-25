export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string'
    },
    {
      name: 'level',
      title: 'Level',
      type: 'number',
      validation: rule => rule.min(1).max(5)
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};
