import React from 'react';

function Modal({handleShowodal}) {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center w-screen h-72 md:w-2/3 md:h-2/3" onClick={handleShowodal}>
            <div className="fixed inset-0 bg-black opacity-35"></div>
            <div className="z-50">
                <div className="w-96 pb-56 md:w-100 md:pb-56  z-50">
                    <div className="absolute w-full h-full">
                        <iframe
                            title="Video"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/IxRVa1DbSAg?si=XYwNsg0mWlcl-iM2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Modal;
