import React from 'react';

const Demo = () => {
    return (
        <>
            <div className="relative w-full h-screen">
                {/* Add your demo video component here */}
                <div className="aspect-w-16 aspect-h-9">
                    <img
                        src="https://i.ibb.co/XFqw2KK/demo.png"
                        alt="Demo Poster"
                        className="object-cover w-full h-full"
                    />
                </div>
                <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src="https://jumpshare.com/embed/oQkEUkP8omOYa1MwK2Dg"
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>



            {/* <div className="container mx-auto mt-8">
                Include your PDF link
                <p>
                    <a
                        className="text-blue-500 hover:underline pt-60"
                        href="https://pdf.ac/2EasOq"
                        rel="noopener noreferrer"
                    >
                        Download PDF
                    </a>
                </p>
            </div> */}

        </>
    );
};

export default Demo;
