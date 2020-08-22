import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const createSitemap = ({filmes, series}) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://droppy.ml</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    </url>
    <url>
    <loc>https://droppy.ml/filmes</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    </url>
    <url>
    <loc>https://droppy.ml/series</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    </url>
    <url>
    <loc>https://droppy.ml/animes</loc>
    <lastmod>2020-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    </url>
    <url>
     <loc>https://droppy.ml/a-propos</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    </url>
    <url>
     <loc>https://droppy.ml/CGU</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
    <url>
     <loc>https://droppy.ml/Politique-de-cookies</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
    <url>
     <loc>https://droppy.ml/Politique-de-confidentialite</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
    <url>
     <loc>https://droppy.ml/DMCA</loc>
     <lastmod>2020-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
    </url>
        ${filmes
          .map(({ slug }) => {
            return `
                    <url>
                        <loc>${`https://droppy.ml/filmes/${slug}`}</loc>
                        <lastmod>2020-08-22</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.5</priority>
                    </url>
                `;
          })
        .join('')}
        ${series
            .map(({ slug }) => {
              return `
                    <url>
                        <loc>${`https://droppy.ml/series/${slug}`}</loc>
                        <lastmod>2020-08-22</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.5</priority>
                    </url>
                  `;
            })
            .join('')}
    </urlset>
    `;


class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        const graphcms = new GraphQLClient(process.env.API_URL);
        
        const {filmes} = await graphcms.request(gql
            `
                {
                    filmes (orderBy:year_DESC, last:500){
                        slug
                    }
                }
            `);
        
        const {series} = await graphcms.request(gql
                `
                    {
                        series (orderBy:year_DESC, last:500){
                            slug
                        }
                    }
            `);

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap({filmes, series}));
    res.end();
  }
}

export default Sitemap;