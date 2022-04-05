import ExpressExpeditious from "express-expeditious";



const cacheoptions = {
    namespace: 'cacheluf',
    defaultTtl: '15 minute',
    statusCodeExpires:{
        404 : '5 minutes',
        500: 0
    }
  };

  const cacheluf= ExpressExpeditious(cacheoptions);
  
  export default cacheluf;