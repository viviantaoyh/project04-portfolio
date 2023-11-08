import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: "snm431kl",
    dataset: "production",
    useCdn: true,
    token: "sk25xbG1GqIdhrr1EmEunNrHGpZfLdmphN16VWIPze3rEmeAIPakMVHlfYysqhFgBZPKf7MBfw5aPrlEAVFv8VA9tYB0kEPy2JIjvdXAw9DYXhp3W1aGiGgwNo4MX9NpK1N51Nq1JWJiJuYLbBeVP1egHawkixydWIKW1dX8AjxY1toCI00i",
});

