import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Post from './post';
import Certificate from './certficate';
import Course from './course';


export default () => {
    
    const data = useStaticQuery(graphql`
        {
            jasonJson {
            data {
                certificates {
                title
                code
                score
                }

                courses {
                    progress
                    title
                    url
                }
            }
            }
        }
    `);

    console.log(data);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto overflow-x-scroll">
                    <Post 
                        data={data.jasonJson.data.certificates} title="My certificates"
                        card={Certificate}
                    />

                    <Post 
                        data={data.jasonJson.data.courses} title="My courses"
                        card={Course}
                    />
                </div>
            </div>
        </section>
    );
};