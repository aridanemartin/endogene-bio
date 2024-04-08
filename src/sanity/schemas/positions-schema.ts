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
  ],

  preview: {
    select: {
      title: 'positionName',
      //   media: 'profileImage',
    },
  },
}

export default positions
