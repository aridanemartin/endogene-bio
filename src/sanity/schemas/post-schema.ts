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
      description:
        'Haz "click" en el botón "Generate" para que se cree la url del artículo (Si ya lo has generado intenta no volver ha hacerlo ya que puede perjudicar al SEO de la página)',
      required: true,
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Imagen de portada',
      description:
        'CAMPO OBLIGATORIO - Recuerda que las imágenes deben estar en formato webp. Puedes utilizar esta web para transformarlas https://towebp.io/',
      type: 'image',
      required: true,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      description:
        'Fecha de publicación. Recuerda que los artículos se ordenan por fecha de publicación (Los más recientes primero)',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
    },
  },
}

export default post
