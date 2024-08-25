const positions = {
  name: 'positions',
  title: 'Positions',
  type: 'document',
  fields: [
    {
      name: 'positionName',
      title: 'Position Name',
      type: 'string',
      required: true,
    },
    {
      name: 'positionLocation',
      title: 'Position Location',
      type: 'string',
      required: true,
    },
    {
      name: 'positionType',
      title: 'Position Type',
      type: 'string',
      required: true,
    },
    {
      name: 'positionDescription',
      title: 'Position Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'linkToApply',
      title: 'Link to Apply',
      type: 'url',
      required: true,
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
          allowRelative: false,
          message: 'Please enter a URL starting with https://www...',
        }),
    },
  ],

  preview: {
    select: {
      title: 'positionName',
      //   media: 'profileImage',
    },
  },
}

export default positions
