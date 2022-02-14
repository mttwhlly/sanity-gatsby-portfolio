export default {
  type: 'object',
  name: 'projectMember',
  title: 'Project Member',
  fields: [
    {
      title: 'Person',
      name: 'person',
      type: 'reference',
      to: {type: 'person'}
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Senior Digital Designer', value: 'Senior Digital Designer'},
          {title: 'Front-end Developer', value: 'Front-end Developer'},
          {title: 'Website Manager', value: 'Website Manager'},
          {title: 'Communications Manager', value: 'Communications Manager'},
          {title: 'Client', value: 'client'},
          {title: 'SharePoint Administrator', value: 'SharePoint Administrator'},
          {title: 'Server Administrator', value: 'Server Administrator'},
          {title: 'DevOps Manager', value: 'DevOps Manager'}
        ]
      }
    }
  ],
  preview: {
    select: {
      personName: 'person.name',
      roles: 'roles',
      media: 'person.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/')
      }
    }
  }
}
