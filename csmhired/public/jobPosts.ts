export interface jobData {
    [property: string]: string
}

interface jobsData {
    [id: string]: jobData
}

const jobPostsData: jobsData = {
        "000111" : {
            "id": "000111",
            "company": "Laborum sit nulla",
            "title": "Job 1: Mollit culpa laborum voluptate Lorem proident pariatur",
            "description": "Culpa cillum veniam anim adipisicing fugiat velit incididunt amet proident pariatur cupidatat. Proident anim occaecat culpa quis velit laborum pariatur veniam ut ea. Pariatur dolor irure minim elit aute deserunt ipsum nisi eiusmod elit nostrud veniam. Elit eiusmod et tempor aute sit ullamco nulla eu ipsum. \n\n Quis est magna proident elit ea. Ullamco ad ut nisi ipsum ea Lorem. Nulla officia id magna adipisicing elit exercitation nisi sunt sit irure culpa.\n\n Sit exercitation cillum elit ex consectetur sunt exercitation quis exercitation. Ea consectetur Lorem nostrud dolore velit. Aliquip proident consequat tempor mollit qui labore non et nostrud duis minim aute. Eiusmod voluptate culpa esse sit exercitation ex. Esse occaecat dolor ad tempor labore ea aliqua anim sit mollit. Pariatur ea voluptate dolor pariatur anim ipsum id adipisicing amet mollit incididunt mollit.",
            "salary": "85000",
            "currency": "USD",
            "location": "San Antonio",
            "country": "United States",
            "remote": "remote"
        },
        "000222" : {
            "id": "000222",
            "company": "Laborum sit nulla",
            "title": "Job 2: Mollit culpa laborum voluptate Lorem proident pariatur consectetur commodo",
            "description": "Culpa cillum veniam anim adipisicing fugiat velit incididunt amet proident pariatur cupidatat. Proident anim occaecat culpa quis velit laborum pariatur veniam ut ea. Pariatur dolor irure minim elit aute deserunt ipsum nisi eiusmod elit nostrud veniam. Elit eiusmod et tempor aute sit ullamco nulla eu ipsum. \n\n Quis est magna proident elit ea. Ullamco ad ut nisi ipsum ea Lorem. Nulla officia id magna adipisicing elit exercitation nisi sunt sit irure culpa.\n\n Sit exercitation cillum elit ex consectetur sunt exercitation quis exercitation. Ea consectetur Lorem nostrud dolore velit. Aliquip proident consequat tempor mollit qui labore non et nostrud duis minim aute. Eiusmod voluptate culpa esse sit exercitation ex. Esse occaecat dolor ad tempor labore ea aliqua anim sit mollit. Pariatur ea voluptate dolor pariatur anim ipsum id adipisicing amet mollit incididunt mollit.",
            "salary": "93500",
            "currency": "CAD",
            "location": "Toronto",
            "country": "Canada",
            "remote": "hybrid"
        }
    }

export { jobPostsData };