import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
            }
            }
        }
    `);

    console.log(data);

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis certificados codigo fácilito</h2>
                    <div className="flex mt-8 items-center">
                        {
                            data.jasonJson.data.certificates.map(cer => (
                                <div className="shadow p-8 bg-white mr-4">
                                    <h4 className="font-bold">{cer.title}</h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">Calificación: {cer.score}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};