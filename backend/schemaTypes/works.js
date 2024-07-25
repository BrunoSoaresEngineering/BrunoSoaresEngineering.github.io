export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string'
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'usedSkills',
      title: 'Used Skills',
      type: 'array',
      of:[
        {
          name: 'usedSkill',
          title: 'Used Skill',
          type: 'reference',
          to: [{ type: 'skills' }]
        }
      ]
    }
  ]
};
