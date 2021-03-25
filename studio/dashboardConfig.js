export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605c6351f78cc29e19029827',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9g9xixb8',
                  apiId: 'a213a151-7030-46ac-a71f-4ce6daafde26'
                },
                {
                  buildHookId: '605c6351caf3bda3e37c422f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-zzra9xn7',
                  apiId: 'c740c28a-2ee3-4de2-a4b8-bdd9bbd428f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rndexe/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-zzra9xn7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
