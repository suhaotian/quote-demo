import asyncComponent from './async_load_component'

export const pages = [
  // {
  //   name: 'quote',
  //   path: '/quote',
  //   exactly: true,
  //   load: asyncComponent((cb) => {
  //     require.ensure([], (require) => {
  //       cb(require('./quote'))
  //     })
  //   }),
  // },
  {
    name: 'd3',
    path: '/d3',
    exactly: true,
    load: asyncComponent((cb) => {
      require.ensure([], (require) => {
        cb(require('./d3'))
      })
    }),
  },
]