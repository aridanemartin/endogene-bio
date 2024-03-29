const post = {
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre completo',
      type: 'string',
      required: true,
    },
    {
      name: 'position',
      title: 'Puesto',
      description:
        'Puesto de trabajo: Ej. CEO, CTO, CMO, etc. Si no aplica, dejar en blanco',
      type: 'string',
      required: true,
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      required: true,
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      required: true,
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
          allowRelative: false,
          message: 'Por favor introduce una URL que empiece por https://www...',
        }),
    },
    {
      name: 'profileImage',
      title: 'Imagen de perfil',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profileHoverImage',
      title: 'Imagen de perfil hover',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
    },
  },
}

export default post
