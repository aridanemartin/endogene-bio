const price = {
  name: 'nutricionEtapasDeLaVidaPrices',
  title: 'Tarifa - Nutrición Etapas de la Vida',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nombre de la tarifa',
      description: 'Por ejemplo: Primera consulta, Consulta de seguimiento...',
      type: 'string',
      required: true,
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Añadir icono',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Descripción de la tarifa',
      description:
        'Describe brevemente en qué consiste la tarifa. Por ejemplo: Primera consulta en la que se realiza una evaluación inicial del paciente y se establece un plan de tratamiento.',
      type: 'array',
      required: true,
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'price',
      title: 'Precio de la tarifa',
      description:
        'Inserta el precio de la tarifa SOLO EN NÚMERO Ejemplo ===> 50',
      type: 'number',
      required: true,
    },
    {
      name: 'priceDiscount',
      title: 'Oferta',
      description:
        'Inserta el descuento en euros que se hará sobre la tarifa SOLO EN NÚMERO Ejemplo ===> 10',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'title',
      description: 'description',
      price: 'price',
    },
  },
}

export default price
