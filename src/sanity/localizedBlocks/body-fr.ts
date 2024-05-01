export const body_fr = {
  name: 'body_fr',
  title: 'POST en francés',
  description:
    'Aquí puedes insertar tanto imágenes como texto. Recuerda que las imágenes deberán estar en modo HORIZONTAL y deben contener una descripción de como mucho 125 carácteres',
  type: 'array',
  required: true,
  of: [
    {
      type: 'block',
    },
    {
      name: 'enrichedImage',
      title: 'Imagen Horizontal',
      type: 'object',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Añadir imagen',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description:
            'Describe el contenido de la imagen para ayudar a mejorar la accesibilidad.',
        },
      ],
    },
    {
      name: 'enrichedImageVertical',
      title: 'Imagen Vertical',
      type: 'object',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Añadir imagen',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description:
            'Describe el contenido de la imagen para ayudar a mejorar la accesibilidad.',
        },
      ],
    },
    {
      name: 'youtubeVideo',
      type: 'object',
      title: 'YouTube Video',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube Video URL',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['https'],
              allowRelative: false,
              message:
                'Por favor introduce una URL que empiece por https://www...',
            }),
        },
      ],
    },
  ],
}
