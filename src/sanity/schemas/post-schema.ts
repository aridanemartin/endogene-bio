import { body_en } from '../localizedBlocks/body-en'
import { body_es } from '../localizedBlocks/body-es'
import { body_fr } from '../localizedBlocks/body-fr'

const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: 'refTitle',
      title: 'Título de la url',
      type: 'string',
      description:
        'Este campo no se mostrará en la página principal ni en la sección de blog sirve como referencia para generar la url (Debe estar en inglés)',
      required: true,
    },
    {
      name: 'title',
      title: 'Título del post',
      type: 'i18n.string',
      required: true,
    },
    {
      name: 'description',
      title:
        'Descripción (Resumen que se mostrará en la página principal y sección de blog)',
      description:
        'haz una breve descripción de no más de dos líneas del artículo o utiliza las dos primeras líneas seguidas de 3 puntos',
      type: 'i18n.text',
      required: true,
    },
    {
      name: 'timeToRead',
      title: 'Tiempo De Lectura',
      description:
        'Tiempo aproximado que tardará el lector en leer el artículo (Introducir solo el número de minutos) Ejemplo ===> 3',
      type: 'string',
      required: true,
    },
    body_en,
    body_es,
    body_fr,
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      required: true,
      options: {
        source: 'refTitle',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },

    {
      name: 'mainImage',
      title: 'Imagen de portada',
      description: 'CAMPO OBLIGATORIO',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'refTitle',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

export default post
