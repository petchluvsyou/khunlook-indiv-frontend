import React, { useEffect, useState } from 'react';

interface PageDetailsProps {
    pageId: number;
}

const PageDetails: React.FC<PageDetailsProps> = ({ pageId }) => {
    const [pageData, setPageData] = useState<any>(null);

    useEffect(() => {
        // Fetch the scraped data (this can be served by a backend)
        fetch('/data/scrapedData.json')
            .then((res) => res.json())
            .then((data) => {
                const page = data.find((item: any) => item.url.includes(`id=${pageId}`));
                setPageData(page);
            });
    }, [pageId]);

    return (
        <div>
            {pageData ? (
                <div
                    dangerouslySetInnerHTML={{ __html: pageData.content }}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PageDetails;
