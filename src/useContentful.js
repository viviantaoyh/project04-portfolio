// unused code due to contentful data reloading issues

import { createClient } from "contentful";
const spaceid = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const apikey = import.meta.env.VITE_CONTENTFUL_API_KEY;


const useContentful = () => {

    const client = createClient({
        space: spaceid,
        environment: 'master', // defaults to 'master' if not set
        accessToken: apikey
      });

    const getProjects = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "projects",
                select: "fields",
            });

            const sanitizedEntries = entries.items.map((item) => 
            {
                const linkToDemo = item.fields.linkToDemo.content[0].content[1].data.uri
                const linkToGitHub = item.fields.linkToGitHub.content[0].content[1].data.uri
                const screenshot = item.fields.screenshot.fields.file.url

                return {
                    ...item.fields,
                    linkToDemo,
                    linkToGitHub,
                    screenshot
                }

            })
            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching projects: ${error}`);
        };
    };

    return { getProjects };
};

export default useContentful;