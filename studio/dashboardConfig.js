export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620859b01146d7c530c98720',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pnppzo9u',
                  apiId: 'e4bd515f-f9c5-4ecc-a09d-8178018350df'
                },
                {
                  buildHookId: '620859b1a90e6fb7261f635e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t2mxnymd',
                  apiId: '25a56d89-482a-4a79-9280-c049dcd30473'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mttwhlly/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t2mxnymd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
