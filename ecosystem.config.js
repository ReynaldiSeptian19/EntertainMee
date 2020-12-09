module.exports = {
    apps: [
      {
         name: 'entertainme - Client',
         script: 'cd client && npm install && npm start',
      },
      {
        name: 'entertainme - Orchestrator',
        script: 'cd server/orchestrator/graphql && npm install && node app.js',
        PORT: 4000
      },
      {
        name: 'entertainme - Service Movies',
        script: 'cd server/services/movies && npm install && node app.js',
        env: {
          DATABASE_NAME: "EntertainMe",
          COLLECTION_NAME: "Movies",
          PORT: 3001
        },
      },
      {
        name: 'entertainme - Service TV Series',
        script: 'cd server/services/series && npm install && node app.js',
        env: {
          DATABASE_NAME: "EntertainMe",
          COLLECTION_NAME: "TvSeries",
          PORT: 3002
        },
      },
    ],
  };