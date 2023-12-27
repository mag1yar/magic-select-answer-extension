export const answers = {
  1: {
    q: 'What are some key areas discussed in the module about best practices for application development?',
    a: 'Application deployment strategies',
  },
  2: {
    q: 'Why is it important to separate application configuration settings from source code?',
    a: 'To easily modify settings between environments',
  },
  3: {
    q: 'In the context of HTTP API payloads, how should consumers of HTTP APIs bind with publishers for loose coupling?',
    a: 'Bind loosely with all fields in the payload',
  },
  4: {
    q: 'What is the recommended approach for handling application components that need to scale efficiently?',
    a: 'Use a worker pattern',
  },
  5: {
    q: 'How can you improve application performance and lower network latency?',
    a: 'Cache frequently accessed or computationally intensive data',
  },
  6: {
    q: 'What role does an API gateway play in making backend functionality available to consumer applications?',
    a: 'It acts as a facade or adapter layer for legacy applications',
  },
  7: {
    q: 'Why is federated identity management recommended for user authentication in applications?',
    a: 'To delegate user authentication to external identity providers',
  },
  8: {
    q: 'What is the purpose of a health check endpoint in application development?',
    a: 'To automatically alert operations teams of system failures',
  },
  9: {
    q: 'How can you ensure that your application receives traffic even if some non-critical dependencies are unavailable?',
    a: 'By returning a successful health check for the UI service',
  },
  10: {
    q: 'What is the purpose of a circuit breaker in handling errors in applications?',
    a: 'To degrade the application gracefully in case of errors',
  },
  11: {
    q: 'What is recommended for handling errors that are more long-lasting and persistent?',
    a: 'Using a circuit breaker and handling failures gracefully',
  },
  12: {
    q: 'Why is it important to consider data sovereignty and compliance requirements in a distributed system?',
    a: 'To ensure consumer privacy and data protection',
  },
  13: {
    q: 'What is the purpose of canary testing or blue-green deployments in the context of continuous integration and delivery?',
    a: 'To ensure that unexpected issues do not affect a large number of users',
  },
  14: {
    q: 'What does the strangler pattern aim to achieve in the re-architecting and migration of large applications?',
    a: 'Incrementally replace smaller components with newer services',
  },
  15: {
    q: "Identify two key aspects of this application's architecture.(Select all 2 correct answers)",
    a: 'The application is monolithic because all layers need to be deployed as a single unit.\nThe application will require longer development and QAcycles as the system grows in features and complexity.',
  },
  16: {
    q: 'Identify three key aspects of a sound architecture for a continuous integration and delivery (CI / CD) system. (Select all 3 correct answers)',
    a: 'Canary deployments can help catch unexpected issues before they affect a large number of users in production\nBuilds should be tested in the development environment and canary deployments should be used before fully deploying the build to the production environment\nWhen a developer commits code into the code repository, a continuous integration tool such as Jenkins builds a container image for the application',
  },
  17: {
    q: 'Which of the following is considered a best practice when developing cloud-native applications?',
    a: 'Implement API gateways to make backend functionality available to consumer applications',
  },
  18: {
    q: 'What are Cloud APIs, and how can they be accessed in applications?',
    a: 'Cloud APIs are programmatic interfaces to Google Cloud services.',
  },
  19: {
    q: 'What is the purpose of the Google Cloud SDK, and what are its two main categories of features?',
    a: 'The SDK includes command-line tools and language-specific Cloud Client Libraries.',
  },
  20: {
    q: 'What is the role of the gcloud CLI in managing Google Cloud services?',
    a: 'The gcloud CLI automates sending credentials in Cloud API calls.',
  },
  21: {
    q: 'Which gcloud CLI tool is used for managing BigQuery?',
    a: 'bq',
  },
  22: {
    q: 'How can Cloud Client Libraries benefit developers in accessing Google Cloud resources?',
    a: 'They use natural conventions and styles of supported languages.',
  },
  23: {
    q: 'What is Cloud Shell, and what features does it provide?',
    a: 'Cloud Shell is a browser-based command line with 5 gigabytes of storage.',
  },
  24: {
    q: 'What is Cloud Code, and how does it enhance development in IDEs?',
    a: 'Cloud Code is a set of IDE plug-ins for Cloud native applications.',
  },
  25: {
    q: 'How can Cloud Code assist in Kubernetes application development within an IDE?',
    a: 'Cloud Code offers auto-complete and in-line documentation for YAML configuration files.',
  },
  26: {
    q: 'What is the purpose of local emulators in the Google Cloud SDK?',
    a: 'Local emulators allow development without a connection to corresponding services.',
  },
  27: {
    q: 'Which of the following statements about Cloud Code are true? (Select the 2 correct answers)',
    a: 'Cloud Code integrates with Secret Manager to securely store sensitive data\nCloud Code works with Cloud Run and Kubernetes applications',
  },
  28: {
    q: 'Which of the following statements about Google Cloud Client Libraries are accurate? (Select all 3 correct answers)',
    a: "Cloud Client Libraries are the latest and recommended approach to making requests to the server\nCloud Client Libraries handle low-level communication, retry logic, and authentication\nCloud Client Libraries are helpful because they support a language's natural conventions and styles",
  },
  29: {
    q: 'What is Cloud Storage primarily designed for?',
    a: 'Object storage for serving, analyzing, and archiving data.',
  },
  30: {
    q: 'Which service is a fully managed, serverless, NoSQL document database built for automatic scaling and high performance?',
    a: 'Firestore',
  },
  31: {
    q: 'What is a key feature of Firestore in native mode?',
    a: 'Real-time updates and offline features',
  },
  32: {
    q: 'Which service is described as a high-performance NoSQL database service that can scale to billions of rows and thousands of columns?',
    a: 'Bigtable',
  },
  33: {
    q: 'What is a key difference between Cloud SQL and Cloud Spanner?',
    a: 'Cloud Spanner requires every table to have a primary key.',
  },
  34: {
    q: 'What is BigQuery primarily designed for?',
    a: 'Low-cost enterprise data warehouse for analytics',
  },
  36: {
    q: 'Which service allows you to run Microsoft SQL Server deployments on Google Cloud?',
    a: 'Compute Engine with preloaded SQL Server.',
  },
  37: {
    q: 'What is the ideal use case for Firebase Cloud Storage?',
    a: 'Storing user-generated images, videos, and files',
  },
  38: {
    q: "What is Firebase Realtime Database's key feature?",
    a: 'Offline responsiveness',
  },
  39: {
    q: "What is Memorystore's primary use case?",
    a: 'Scalable web applications, gaming, and stream processing',
  },
  40: {
    q: 'A restaurant in your neighborhood wants to put up a website that displays static information including a menu, restaurant hours, and location on a map. You want to help set up the website. What is the best solution for serving the website’s content on Google Cloud?',
    a: "Serve the website's content from a Cloud Storage bucket",
  },
  41: {
    q: 'You are building a banking application that is expected to have a very large number of users across the world. When users make a deposit, they want to see the result of this deposit reflected immediately when they view their balance. What data storage option is ideal for storing account balance information for users?',
    a: 'Cloud Spanner is ideal because it supports strongly consistency reads in addition to horizontal scalability, low latency, and high throughput',
  },
  42: {
    q: 'You have a very large database that you are using for complex queries in a suite of business intelligence applications. You want to move the data to a fully-managed solution. Which database option is ideal for such use cases?',
    a: 'BigQuery',
  },
};
