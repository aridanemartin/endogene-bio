const positions = {
  name: 'positions',
  title: 'Positions',
  type: 'document',
  fields: [
    {
      name: 'positionName',
      title: 'Position Name',
      description:
        "The name of the position you're hiring for. E.G. 'Data Scientist'",
      type: 'string',
      required: true,
    },
    {
      name: 'positionLocation',
      title: 'Position Location',
      description: 'The location of the position. E.G. "Remote"',
      type: 'string',
      required: true,
    },
    {
      name: 'positionType',
      title: 'Position Type',
      description: 'The type of position. E.G. "Full-time / Part-time"',
      type: 'string',
      required: true,
    },
    {
      name: 'linkToApply',
      title: 'Link to Apply',
      description:
        'The URL to apply for this position (It can be linkedin, indeed, etc.)',
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
    },
  },
}

export default positions
